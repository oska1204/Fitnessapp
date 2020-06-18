customElements.define(
    'c-program',
    class extends CustomElement {
        constructor() {
            super();
        }

        connectedCallback() {

            this.data.program.forEach(article => {
                const { heading, paragraphs, video } = article
    
                this.insertAdjacentHTML('beforeend', `
                    <article>
                        <h3>${heading}</h3>
                        ${wrap`<p>${paragraphs}</p>`}
                        <div class="video">
                            <iframe src="${video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </article>
                `)
            });
        }
    }
);
