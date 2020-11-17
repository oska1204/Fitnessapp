customElements.define(
    'c-program',
    class extends CustomElement {
        constructor() {
            super();
        }

        connectedCallback() {
            if (this.data.program) this.tempUpdate()
        }
        
        tempUpdate() {
            this.data.program.forEach(article => {
                this.insertAdjacentHTML('beforeend', `
                    <c-video data-raw="${setPath(article)}"></c-video>
                `)
            });
        }
    }
);
