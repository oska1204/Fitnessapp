import '/js/web-components/login-modal.js'

export default function login() {
	const template = document.createElement('template')
	template.innerHTML = `
		<c-login-modal>
		</c-login-modal>
	`
	document.body.appendChild(template.content)
}
