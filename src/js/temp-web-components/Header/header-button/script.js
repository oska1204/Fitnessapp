customElements.define('header-button', class extends WebKey {
    constructor() {
        super('text', 'href')
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

    render_text() {
        this.elms.a.innerHTML = this.text
    }

    render_href() {
        this.elms.a.href = this.href
    }
})
