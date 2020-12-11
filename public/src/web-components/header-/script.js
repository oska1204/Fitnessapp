customElements.define('header-', class extends WebKey {
    constructor() {
        super()
    }

    contentLoaded() {
        const {
            addElms,
            query,
            setEventListener,
        } = this

        addElms({
            btnToggleTheme: query('.btn-toggle-theme'),
        })

        const { btnToggleTheme } = this.elms
        
        setEventListener(btnToggleTheme, 'click', toggleTheme)
    }
})
