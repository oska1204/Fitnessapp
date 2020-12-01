customElements.define('header-toggle-theme', class extends WebKey {
    constructor() {
        super()
        this.elms = {}
    }

    contentLoaded() {
        this.setEventListener(this, 'click', toggleTheme);
        this.elms.btn = this.shadowRoot.querySelector('header-button')
        const style = document.createElement('template')
        style.innerHTML = `<link rel="stylesheet" href="${this.dirname}inject.css">`
        const  appendStyle = () => this.elms.btn.shadowRoot.querySelector('[href$="/style.css"]').after(style.content)
        if (this.elms.btn.isContentLoaded)
            appendStyle()
        else
            this.setEventListener(this.elms.btn, 'content-loaded', () => appendStyle())
    }

    contentRemoved() {
    }
})
