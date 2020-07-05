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
				<label class="nav-toggle">
					<input type="checkbox">
					<div class="line"></div>
					<div class="line"></div>
					<div class="line"></div>
				</label>
				<nav>
					<c-header-ul data-links="${setPath(links)}">
					</c-header-ul>
				</nav>
			`;

			
			const navToggle = this.querySelector('.nav-toggle')
			const checkbox = this.querySelector('.nav-toggle [type=checkbox]')

			checkbox.addEventListener('change', function (event) {
				switch (event.target.checked) {
					case true:
						navToggle.classList.add('checked')						
						break;

					case false:
						navToggle.classList.remove('checked')	
						break;
				}
			})
		}
	}
);
