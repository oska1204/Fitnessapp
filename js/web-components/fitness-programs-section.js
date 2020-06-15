customElements.define(
    'c-fitness-programs-section',
    class extends CustomElement {
        constructor() {
            super();
        }
        
        setData() {
            this.data.articles.forEach(article => {
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
