customElements.define(
    'c-fitness-programs-section',
    class extends CustomElement {
        constructor() {
            super();

            const articles = link(this.dataset.articles)
            
            articles.forEach(article => {
                this.insertAdjacentHTML('beforeend', `
                    <article>
                        <h3>${article.heading}</h3>
                        ${wrap`<p>${article.paragraphs}</p>`}
                    </article>
                `)
            });            
        }
    }
);
