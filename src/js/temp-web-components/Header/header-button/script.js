customElements.define('header-button', class extends WebKey {
    constructor() {
        super()
        this.elms = {}
    }
    
    contentLoaded() {
        this.elms.a = this.shadowRoot.querySelector('a')
    }

    contentRemoved() {
    }

    static get observedAttributes() {
        return ['text', 'href']
    }

    get text() {
        return this.data.text
    }

    set text(value) {
        this.data.text = value
        return true
    }

    render_text() {
        this.elms.a.innerHTML = this.text
    }

    get href() {
        return this.data.href
    }

    set href(value) {
        this.data.href = value
        return true
    }

    render_href() {
        this.elms.a.href = this.href
    }
})
