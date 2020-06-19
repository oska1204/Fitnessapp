customElements.define(
    'c-video',
    class extends CustomElement {
        constructor() {
            super();
        }

        connectedCallback() {
            const { heading, paragraphs, video } = this.data

            this.innerHTML = `
                <h3>${heading}</h3>
                ${wrap`<p>${paragraphs}</p>`}
                <div class="video">
                    <iframe src="${video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            `
        }
    }
);