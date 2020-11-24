customElements.define('header-nav', class extends WebKey {
    constructor() {
        super()
        this.elms = {}
    }

    contentLoaded() {
        this.elms.ul = this.shadowRoot.querySelector('ul')
        this.elms.liTemplate = this.shadowRoot.querySelector('template[li]')
    }

    contentRemoved() {
    }

    static get observedAttributes() {
        return ['links']
    }

    get links() {
        return this.data.links
    }

    set links(value) {
        this.data.links = value
        return true
    }

    render_links() {
        this.links.forEach(obj => {
            const { text, href } = obj
            if (this.shadowRoot.querySelector(`[text="${text}"][href="${href}"]`))
                return
            const li = document.createElement('li')
            const btn = document.createElement('header-button')
            btn.href = href
            btn.text = text
            li.appendChild(btn)
            this.elms.ul.lastElementChild.before(li)            
        });
    }
})
