import Template from '../_template.js';
export default class Form extends Template {
	constructor() {
		super();
        this.template = this.htmlTemplate(`
            <form class="login">
                <h1>Log ind</h1>
                <input type="text" placeholder="Email">
                <input type="password" placeholder="Password">
                <button>Log mig ind</button>
            </form>
        `);
        this.element = this.template.firstElementChild
	}
}