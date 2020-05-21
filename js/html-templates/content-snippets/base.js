import Template from './_template.js';
export default class Base extends Template {
	constructor() {
		super();
		this.template = this.htmlTemplate(`
            <header></header>
            <div class="wrapper">
                <main></main>
            </div>
        `);
		this.header = this.template.querySelector('header');
		this.main = this.template.querySelector('main');
	}
}
