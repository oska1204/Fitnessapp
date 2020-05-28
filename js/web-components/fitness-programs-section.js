const paragraphs = function (paragraphs) {
    return paragraphs
        .map(function (paragraph) {
            return `<p>${paragraph}</p>`;
        })
        .join('');
}

let data = []

const nodes = {}

customElements.define(
    'c-fitness-programs-section',
    class extends HTMLElement {
        constructor() {
            super();
            data = JSON.parse(this.dataset.articles)
            data.forEach(article => {
                this.insertAdjacentHTML('beforeend', `
                    <article>
                        <h3>${article.heading}</h3>
                        ${paragraphs(article.paragraphs)}
                    </article>
                `)
            });
        }
    }
);
// 'Ben program'
// 'Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.'
// 'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.'
