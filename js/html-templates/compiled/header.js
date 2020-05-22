import toggleTheme from '../../utils/toggle-theme.js';
import sameUrl from '../../utils/same-url.js';

const styleSheet = document.createElement('link');
styleSheet.rel = 'stylesheet';
styleSheet.href = '/css/header.css';
document.head.appendChild(styleSheet);

customElements.define(
	'c-header',
	class extends HTMLElement {
		constructor() {
			super();
			this.innerHTML = `
		<h2><a href="/">Fitnessapp</a></h2>
		<nav>
			<ul>
				<li><a href="/fitness-programs">Træningsprogram</a></li>
				<li><a href="/videos">Videoer</a></li>
				<li><a href="#">Brugere</a></li>
				<li><a class="btn-toggle-theme">☼</a></li>
			</ul>
		</nav>
	`;

			this.btnToggleTheme = this.querySelector('.btn-toggle-theme');
			this.btnToggleTheme.addEventListener('click', toggleTheme);

			this.links = this.querySelectorAll('a[href]');
			this.links.forEach(function (element) {
				element.addEventListener('click', sameUrl);
			});
		}
	}
);
