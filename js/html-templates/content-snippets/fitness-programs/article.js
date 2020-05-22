function createArticles(articles) {
	return articles
		.map(function (article) {
			return `
            <article>
                <h3>${article.heading}</h3>
                ${createP(article.paragraphs)}
            </article>
			`;
		})
		.join('');
}

function createP(paragraphs) {
	return paragraphs
		.map(function (paragraph) {
			return `<p>${paragraph}</p>`;
		})
		.join('');
}

customElements.define(
	'c-articles--fitness-programs',
	class extends HTMLElement {
		constructor() {
			super();
		}
		set _data(data) {
			this.innerHTML = `
				 ${createArticles(data)}
			`;
		}
	}
);
// 'Ben program'
// 'Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.'
// 'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.'
