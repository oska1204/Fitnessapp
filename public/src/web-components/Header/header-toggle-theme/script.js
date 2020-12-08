customElements.define('header-toggle-theme', class extends WebKey {
    constructor() {
        super()
    }

    contentLoaded() {
        const {
            setEventListener,
        } = this
        setEventListener(this, 'click', toggleTheme);
    }
})
