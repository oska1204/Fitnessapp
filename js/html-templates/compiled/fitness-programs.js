import Host from '../content-snippets/host.js';

import Heading from '../content-snippets/main/heading.js';
import Article from '../content-snippets/fitness-programs/article.js';

export default function fitnessPrograms() {
	const main = document.querySelector('main')

	const host = new Host('fitness-programs');

	const heading = new Heading(
		'Træningsprogram',
		'Tryk på en plan for at ændre den eller <a href="#">opret en ny plan</a>'
	);

	const article = new Article(
		'Ben program',
		'Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.',
		'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.'
	);

	main.appendChild(host.template);
	host.element.appendChild(heading.template);
	host.element.appendChild(article.template);
}
