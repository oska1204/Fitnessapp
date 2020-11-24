customElements.define('header-toggle-theme', class extends WebKey {
    constructor() {
        super()
        this.elms = {}
    }
    
    contentLoaded() {
        this.addEventListener('click', toggleTheme);
        this.elms.btn = this.shadowRoot.querySelector('header-button')
        console.log(this.elms.btn.shadowRoot)
        const style = document.createElement('style')
        style.innerHTML = `
            .wrapper a {
                user-select: none;
                cursor: pointer;
                font-size: 1.5em;
                line-height: 0.65;
                -webkit-text-stroke: 1px;
            }
        `
        this.elms.btn.shadowRoot.append(style)
    }

    contentRemoved() {
    }
})
