import Template from './_template.js';
import toggleTheme from '../../utils/toggle-theme.js';
import sameUrl from '../../utils/same-url.js';

export default class Header extends Template {
	constructor() {
		super();
		this.template = this.htmlTemplate(`
            <h2><a href="../">Fitnessapp</a></h2>
            <nav>
                <ul>
                    <li><a href="../fitness-programs">Træningsprogram</a></li>
                    <li><a href="../videos">Videoer</a></li>
                    <li><a href="#">Brugere</a></li>
                    <li><a class="btn-toggle-theme">☼</a></li>
                </ul>
            </nav>
        `);
		this.btnToggleTheme = this.template.querySelector('.btn-toggle-theme');
		this.btnToggleTheme.addEventListener('click', toggleTheme);
		this.links = this.template.querySelectorAll('a[href]');
		this.links.forEach(function (element) {
            element.addEventListener('click', sameUrl)
        });
	}
}
