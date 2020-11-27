customElements.define('header-', class extends WebKey {
    constructor() {
        super()
        this.elms = {}
        this.links = [
            {
                "href": "/fitness-programs",
                "text": "Træningsprogram"
            },
            {
                "href": "/videos",
                "text": "Videoer"
            },
            {
                "href": "#",
                "text": "Brugere"
            },
            {
                "href": "/login",
                "text": "login"
            }
        ]
    }

    contentLoaded() {
        this.elms.nav = this.shadowRoot.querySelector('header-nav')
    }

    contentRemoved() {
    }

    static get observedAttributes() {
        return ['links']
    }

    get links() {
        return this.data.links
    }

    set links(value) {
        this.data.links = value
        return true
    }

    render_links() {
        this.elms.nav.links = this.links
    }
})

