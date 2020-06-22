customElements.define(
    'c-header-li',
    class extends CustomElement {
        constructor() {
            super();
        }

        connectedCallback() {
            const { href, text } = this.data
            
            if (!href && !text) return
            
            this.innerHTML = `
                <a class="btn" href="${href}">${text}</a>
            `
        }
    }
);