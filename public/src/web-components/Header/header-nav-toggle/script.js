customElements.define('header-nav-toggle', class extends WebKey {
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
            navToggle: query('#nav-toggle')
        })
        const { navToggle } = this.elms
        setEventListener(
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
