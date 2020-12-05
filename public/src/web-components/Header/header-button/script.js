customElements.define('header-button', class extends WebKey {
    constructor() {
        super('text', 'href')
        this.elms = {}
    }

    contentLoaded() {
        this.elms.a = this.shadowRoot.querySelector('a')
        this.elms.slot = this.shadowRoot.querySelector('slot')
    }

    static get observedAttributes() {
        return ['text', 'href']
    }

    render_text() {
        const { slot } = this.elms
        slot.innerHTML = this.text
    }

    render_href() {
        const { a } = this.elms
        a.href = this.href
    }
})
