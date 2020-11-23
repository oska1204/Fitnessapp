customElements.define('header-', class extends WebKey {
    constructor() {
        super()
        this.elms = {}
    }
    
    contentLoaded() {
    }

    contentRemoved() {
    }

    static get observedAttributes() {
        return []
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

