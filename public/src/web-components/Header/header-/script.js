customElements.define('header-', class extends WebKey {
    constructor() {
        super('links')
        this.elms = {}
    }

    contentLoaded() {
        this.elms.nav = this.shadowRoot.querySelector('header-nav')
    }

    static get observedAttributes() {
        return ['links']
    }

    render_links() {
        this.elms.nav.links = this.links
    }
})

