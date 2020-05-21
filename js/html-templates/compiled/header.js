import Host from '../content-snippets/host.js';

import Content from '../content-snippets/header/content.js';

export default function header() {
	const header = document.querySelector('header')

	const host = new Host('header');

	const content = new Content();

	header.appendChild(host.template);
	host.element.appendChild(content.template);
}
