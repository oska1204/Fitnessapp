import Template from '../_template.js';
export default class MainHeading extends Template {
	constructor(heading = String(), subText = String()) {
		super();
		this.template = this.htmlTemplate(`
            <h1>${heading}</h1>
            <p>${subText}</p>
        `);
	}
}

// 'Træningsprogram'
// 'Tryk på en plan for at ændre den eller <a href="#">opret en ny plan</a>'
