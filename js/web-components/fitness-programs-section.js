customElements.define(
    'c-fitness-programs-section',
    class extends CustomElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.data.articles.forEach(article => {
                this.insertAdjacentHTML('beforeend', `
                    <article data-program="${setPath(article.program)}">
                        <h3>${article.heading}</h3>
                        ${wrap`<p>${article.paragraphs}</p>`}
                    </article>
                `)
            });

            const articles = this.querySelectorAll('article')

            articles.forEach(article => {
                article.addEventListener('click', ()=>{
                    document.body.insertAdjacentHTML('beforeend', `
                        <c-modal>
                            <c-fitness-program data-program="${article.dataset.program}"></c-fitness-program>
                        </c-modal>
                    `)
                })
            })
        }
    }
);
