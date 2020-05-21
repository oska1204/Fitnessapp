import Template from './_template.js';
export default class Host extends Template {
	constructor(name = String()) {
		super();
		this.template = this.htmlTemplate(`
            <div class="${name}">
                <link rel="stylesheet" href="../css/${name}.css">
            </div>
        `);
        this.element = this.template.firstElementChild;
	}
}
