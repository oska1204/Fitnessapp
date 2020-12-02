customElements.define('header-nav', class extends WebKey {
    constructor() {
        super('links')
        this.elms = {}
    }

    contentLoaded() {
        this.elms.ul = this.shadowRoot.querySelector('ul')
        this.elms.liTemplate = this.shadowRoot.querySelector('template[li]')
    }

    static get observedAttributes() {
        return ['links']
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
