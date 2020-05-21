import Host from '../content-snippets/host.js';
import Header from '../content-snippets/header.js';

function header() {
	const headerHost = new Host('header');
	const header = new Header();

	headerHost.element.appendChild(header.template);

	return headerHost.element;
}

export default header();
