import CustomElement from '/js/utils/custom-element.js'

customElements.define(
    'c-fitness-programs-section',
    class extends CustomElement {
        constructor() {
            super();

            this.state.articles.forEach(article => {
                this.insertAdjacentHTML('beforeend', this.html`
                    <article>
                        <h3>${article.heading}</h3>
                        ${this.wrap`<p>${article.paragraphs}</p>`}
                    </article>
                `)
            });
        }
    }
);
