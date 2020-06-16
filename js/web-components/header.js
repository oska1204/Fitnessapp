import toggleTheme from '/js/utils/toggle-theme.js';

customElements.define(
	'c-header',
	class extends CustomElement {
		constructor() {
			super();
		}
		
        connectedCallback() {
			this.innerHTML = `
				<h2><a href="/">Fitnessapp</a></h2>
				<nav>
					<ul>
						<li><a class="btn" href="/fitness-programs">Træningsprogram</a></li>
						<li><a class="btn" href="/videos">Videoer</a></li>
						<li><a class="btn" href="#">Brugere</a></li>
						<li><a class="btn" href="/login">login</a></li>
						<li><a class="btn btn-toggle-theme">☼</a></li>
					</ul>
				</nav>
			`;
	
			const btnToggleTheme = this.querySelector('.btn-toggle-theme');
			
			btnToggleTheme.addEventListener('click', toggleTheme);         
        }
	}
);
