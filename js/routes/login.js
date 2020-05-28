import Modal from '../html-templates/modal.js';
import Form from '../html-templates/login/form.js';

export default function login() {
	const modal = new Modal();
	const form = new Form();

	document.body.appendChild(modal.template);
	modal.content.appendChild(form.template)
}
