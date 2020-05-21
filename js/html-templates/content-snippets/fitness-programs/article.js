import Template from '../_template.js';
export default class Article extends Template {
	constructor(heading = String(), ...paragraphs) {
		super();
		this.template = this.htmlTemplate(`
            <article>
                <h3>${heading}</h3>
                ${paragraphs
					.map(function (paragraph) {
						return `<p>${paragraph}</p>`;
					})
					.join('')}
            </article>
		`);
	}
}
// 'Ben program'
// 'Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.'
// 'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.'
