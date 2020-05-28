const nodes = {}

customElements.define(
	'c-main-heading',
	class extends HTMLElement {
		constructor() {
			super();
			this.insertAdjacentHTML('beforeend', `
            	<h1>${this.dataset.heading}</h1>
				<p>${this.dataset.subText}</p>
			`)
		}
	}
);
