import toggleTheme from '/js/utils/toggle-theme.js';
import sameUrl from '/js/utils/same-url.js';

const nodes = {}

customElements.define(
	'c-header',
	class extends HTMLElement {
		constructor() {
			super();
			this.innerHTML = `
				<link rel="stylesheet" href="/css/header.css">
				<h2><a href="/">Fitnessapp</a></h2>
				<nav>
					<ul>
						<li><a href="/fitness-programs">Træningsprogram</a></li>
						<li><a href="/videos">Videoer</a></li>
						<li><a href="#">Brugere</a></li>
						<li><a href="/login">login</a></li>
						<li><a class="btn-toggle-theme">☼</a></li>
					</ul>
				</nav>
			`;

			nodes.btnToggleTheme = this.querySelector('.btn-toggle-theme');
			nodes.links = this.querySelectorAll('a[href]');
			
			nodes.btnToggleTheme.addEventListener('click', toggleTheme);
			nodes.links.forEach(function (element) {
				element.addEventListener('click', sameUrl);
			});
		}
	}
);
