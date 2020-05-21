import Base from '../content-snippets/base.js';
import Host from '../content-snippets/host.js';

import Heading from '../content-snippets/main/heading.js';
import Category from '../content-snippets/videos/category.js';

import header from './header.js';

export default function videos() {
	const base = new Base();

	const videosHost = new Host('videos');

	const heading = new Heading(
		'Videoer',
		'Tryk på en video for at redigere den eller <a href="#">tilføj en ny video</a>'
	);
	const category = new Category(
		'Ben program',
		'Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.',
		'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.'
	);

	document.body.appendChild(base.template);

	base.header.appendChild(header);

	base.main.appendChild(videosHost.template);
	videosHost.element.appendChild(heading.template);
	videosHost.element.appendChild(category.template);
}
