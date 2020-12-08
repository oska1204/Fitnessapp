customElements.define('header-button', class extends WebKey {
    constructor() {
        super('href')
    }

    contentLoaded() {
        const {
            addElms,
            query,
        } = this
        addElms({
            a: query('a'),
        })
    }

    static get observedAttributes() {
        return ['href']
    }

    render_href() {
        const { a } = this.elms
        a.href = this.href
    }
})
