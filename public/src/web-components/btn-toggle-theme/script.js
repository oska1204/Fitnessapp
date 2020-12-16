customElements.define('btn-toggle-theme', class extends WebKey {
    constructor() {
        super()
    }

    contentLoaded() {
        const sr = this.shadowRoot

        const a = sr.querySelector('a')

        Object.assign(this.elms, {
            a
        })

        a.addEventListener('click', toggleTheme)
    }
})
