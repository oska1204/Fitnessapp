import CustomElement from '/js/utils/custom-element.js'

customElements.define(
	'c-main-heading',
	class extends CustomElement {
		constructor() {
			super();
			
			this.insertAdjacentHTML('beforeend', this.html`
            	<h1>${this.state.heading}</h1>
				${this.wrap`<p>${this.state.paragraphs}</p>`}
			`)
		}
	}
);
