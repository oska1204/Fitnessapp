export default class Template {
	constructor() {}

	htmlTemplate(html) {
		const htmlTemplate = document.createElement('template');
		htmlTemplate.innerHTML = html;
		return htmlTemplate.content;
	}
}
