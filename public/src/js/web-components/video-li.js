customElements.define(
    'c-video-li',
    class extends CustomElement {
        constructor() {
            super();
        }

        connectedCallback() {
            const { image, heading, paragraphs } = this.data

            this.innerHTML = `
                <div class="video-thumbnail">
                    <img src="${image}">
                </div>
                <div class="info">
                    <h3>${heading}</h3>
                    ${wrap`<p class="text-overflow">${paragraphs}</p>`}
                </div>
            `
        }
    }
);