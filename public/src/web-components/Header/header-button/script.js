customElements.define('header-button', class extends WebKey {
    constructor() {
        super('href')
    }

    contentLoaded() {
        this.elms.a = this.shadowRoot.querySelector('a')
    }

    static get observedAttributes() {
        return ['href']
    }

    render_href() {
        const { a } = this.elms
        a.href = this.href
    }
})
