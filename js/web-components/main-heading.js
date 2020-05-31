customElements.define(
	'c-main-heading',
	class extends CustomElement {
		constructor() {
			super();
			
			this.insertAdjacentHTML('beforeend', `
            	<h1>${this.data.heading}</h1>
				${this.wrap`<p>${this.data.paragraphs}</p>`}
			`)
		}
	}
);
