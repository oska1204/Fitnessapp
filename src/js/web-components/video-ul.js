customElements.define(
    'c-video-ul',
    class extends CustomElement {
        constructor() {
            super();
        }

        connectedCallback() {
            const { ul } = this.data

            ul.forEach(li => {
                this.insertAdjacentHTML('beforeend', `
                    <c-video-li data-raw="${setPath(li)}"></c-video-li>
                `)
            })
        }
    }
);
