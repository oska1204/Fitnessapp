import Modal from '../content-snippets/modal.js';
import Form from '../content-snippets/login/form.js';

export default function login() {
	const modal = new Modal();
	const form = new Form();

	document.body.appendChild(modal.template);
	modal.content.appendChild(form.template)
}
