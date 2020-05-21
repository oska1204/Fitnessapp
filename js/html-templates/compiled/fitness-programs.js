import Base from '../content-snippets/base.js';
import Host from '../content-snippets/host.js';

import Heading from '../content-snippets/main/heading.js';
import Article from '../content-snippets/fitness-programs/article.js';

import header from './header.js';

export default function fitnessPrograms() {
	const base = new Base();

	const mainHost = new Host('fitness-programs');
	const heading = new Heading(
		'Træningsprogram',
		'Tryk på en plan for at ændre den eller <a href="#">opret en ny plan</a>'
	);
	const article = new Article(
		'Ben program',
		'Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.',
		'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.'
	);

	document.body.appendChild(base.template);

	base.header.appendChild(header);

	base.main.appendChild(mainHost.template);
	mainHost.element.appendChild(heading.template);
	mainHost.element.appendChild(article.template);
}
