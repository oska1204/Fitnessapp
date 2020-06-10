export default function login() {
	const template = document.createElement('template')
	template.innerHTML = `
		<c-login>
		</c-login>
	`
	document.body.appendChild(template.content)
}
