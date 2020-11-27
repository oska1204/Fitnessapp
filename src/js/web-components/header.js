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
				<h1><a href="/">Fitnessapp</a></h1>
				<label for="nav-toggle">
					<div class="line"></div>
					<div class="line"></div>
					<div class="line"></div>
				</label>
				<input type="checkbox" id="nav-toggle">
				<nav>
					<c-header-ul data-links="${setPath(links)}">
					</c-header-ul>
				</nav>
			`;
		}
	}
);
