// See "template-" folder for template
export default (() => {
    const getPath = () => {
        return new Error()
            .stack
            .toString()
            .match(/https?:\/\/.*\.js/g)
            .filter(e => !e.match(/\/web-key\.js/))[0]
            .replace(/(?!.*\/).*/, '')
    }

    const templates = {}

    const init = async elm => {
        const path = getPath()
        elm.dirname = path
        const initContent = async () => {
            await elm.shadowRoot.appendChild(templates[path].content.cloneNode(true))
            elm.removeEventListener('fetched', initContent)
            elm.isContentLoaded = true
            elm.dispatchEvent(new CustomEvent('content-loaded'))
            elm.updateFrontEnd()
        }
        if (!templates[path]) {
            templates[path] = document.createElement('template')
            templates[path].isFetched = 1
            templates[path].innerHTML += await fetch(`${path}template.html`)
                .then(e => e.text())
            templates[path].content.querySelector('*:not(link):not(style):not(script)').insertAdjacentHTML('beforebegin', `<link rel="stylesheet" href="${path}style.css">`)
            templates[path].isFetched = 2
            templates[path].dispatchEvent(new CustomEvent('fetched'))
        }
        if (templates[path].isFetched === 1) {
            templates[path].addEventListener('fetched', initContent)
        }
        if (templates[path].isFetched === 2) {
            initContent()
        }
    }

    window.WebKey = class WebKey extends HTMLElement {
        constructor(...props) {
            super()
            this.defaultProps(...props)
            this.attachShadow({ mode: 'open' })
            this.addEventListener('content-loaded', this.contentLoaded)
            init(this)
        }

        isContentLoaded = false
        elms = {}
        _eventListeners = []
        _obj = {}
        _data = new Proxy(this._obj, {
            set: (obj, prop, value) => {
                obj[prop] = value
                this.renderProp(prop)
                return true
            }
        })

        defaultProps = (...props) => {
            const isFunction = fn => typeof fn === 'function'
            props.forEach(prop => {
                Object.defineProperty(this, prop, {
                    get: () => {
                        const value = this.data[prop]
                        const getFn = this[`get_${prop}`]
                        if (isFunction(getFn))
                            return getFn(value)
                        return value
                    },
                    set: (value) => {
                        const setFn = this[`set_${prop}`]
                        if (isFunction(setFn))
                            this.data[prop] = setFn(value)
                        else
                            this.data[prop] = value
                        return true
                    },
                    enumerable: true,
                    configurable: true
                })
            })
        }

        connectedCallback() {
            if (this.isContentLoaded) {
                this.contentLoaded()
                this.updateFrontEnd()
            }
        }

        disconnectedCallback() {
            this.disconnectEventListeners()
            this.contentRemoved()
        }

        static get observedAttributes() {
            return []
        }

        attributeChangedCallback(name, oldValue, newValue) {
            this[name] = newValue
        }

        contentLoaded() {
        }

        contentRemoved() {
        }

        updateFrontEnd = () => {
            for (const prop in this.data) {
                if (this.data.hasOwnProperty(prop)) {
                    this.renderProp(prop)
                }
            }
        }

        get data() {
            return this._data
        }

        set data(obj) {
            for (const prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    const value = obj[prop]
                    this.data[prop] = value
                }
            }
        }

        renderProp = (prop) => {
            if (this.isContentLoaded && typeof this[this.getRenderName(prop)] === 'function')
                this[`render_${prop}`]()
        }
    }

    return WebKey
})()
