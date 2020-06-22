customElements.define(
    'c-program',
    class extends CustomElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.data.program.forEach(article => {
                this.insertAdjacentHTML('beforeend', `
                    <c-video data-raw="${setPath(article)}"></c-video>
                `)
            });
        }
    }
);