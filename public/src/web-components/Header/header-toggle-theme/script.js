customElements.define('header-toggle-theme', class extends WebKey {
    constructor() {
        super()
        this.elms = {}
    }

    contentLoaded() {
        this.setEventListener(this, 'click', toggleTheme);
    }
})
