customElements.define(
	'c-header',
	class extends CustomElement {
		constructor() {
			super();
		}

		connectedCallback() {
			const links = [
				{
					"href": "/fitness-programs",
					"text": "Træningsprogram"
				},
				{
					"href": "/videos",
					"text": "Videoer"
				},
				{
					"href": "#",
					"text": "Brugere"
				},
				{
					"href": "/login",
					"text": "login"
				}
			]

			this.innerHTML = `
				<h2><a href="/">Fitnessapp</a></h2>
				<nav>
					<c-header-ul data-links="${setPath(links)}">
					</c-header-ul>
				</nav>
			`;
		}
	}
);
