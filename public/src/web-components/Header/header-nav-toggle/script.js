customElements.define('header-nav-toggle', class extends WebKey {
    constructor() {
        super()
    }

    contentLoaded() {
        this.elms.navToggle = this.shadowRoot.querySelector('#nav-toggle')
        const { navToggle } = this.elms
        this.setEventListener(
            navToggle,
            'change',
            () => {
                switch (navToggle.checked) {
                    case true:
                        this.setAttribute('checked', '')
                        break;

                    case false:
                        this.removeAttribute('checked')
                        break;
                }
            }
        )
    }
})
