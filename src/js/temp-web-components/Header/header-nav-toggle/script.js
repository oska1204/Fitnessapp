customElements.define('header-nav-toggle', class extends WebKey {
    constructor() {
        super()
        this.elms = {}
    }

    contentLoaded() {
        this.elms.navToggle = this.shadowRoot.querySelector('#nav-toggle')
        this.setEventListener(
            this.elms.navToggle,
            'change',
            e => {
                e.target.checked
                    ? this.setAttribute('checked', '')
                    : this.removeAttribute('checked')
            }
        )
    }

    contentRemoved() {
    }

    static get observedAttributes() {
        return ['blank']
    }

    get blank() {
        return this.data.blank
    }

    set blank(value) {
        this.data.blank = value
        return true
    }

    render_blank() {
    }
})
