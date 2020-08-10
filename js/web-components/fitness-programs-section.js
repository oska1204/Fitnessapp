customElements.define(
    'c-fitness-programs-section',
    class extends CustomElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.data.articles.forEach(article => {
                this.insertAdjacentHTML('beforeend', `
                    <article data-program="${setPath(article)}">
                        <h3>${article.heading}</h3>
                        ${wrap`<p>${article.paragraphs}</p>`}
                    </article>
                `)
            });

            const articles = this.querySelectorAll('article')

            articles.forEach(article => {
                article.getData()
                const { heading, paragraphs, program } = article.data.program

                article.addEventListener('click', () => {
                    document.body.insertAdjacentHTML('beforeend', `
                        <c-modal>
                            <section class="program">
                                <c-main-heading data-raw="${setPath({ heading, paragraphs })}"></c-main-heading>
                                <c-program data-program="${setPath(program)}"></c-program>
                            </section>
                        </c-modal>
                    `)
                })
            })
        }
    }
);
