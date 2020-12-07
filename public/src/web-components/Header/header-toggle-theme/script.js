customElements.define('header-toggle-theme', class extends WebKey {
    constructor() {
        super()
    }

    contentLoaded() {
        this.setEventListener(this, 'click', toggleTheme);
    }
})
