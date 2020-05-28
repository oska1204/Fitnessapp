import Template from './_template.js';
export default class Modal extends Template {
	constructor() {
		super();
		this.template = this.htmlTemplate(`
            <div class="modal">
                <div class="content"></div>
            </div>
        `);
        this.element = this.template.firstElementChild
        this.content = this.template.querySelector('.content')
	}
}
