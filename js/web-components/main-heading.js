customElements.define(
	'c-main-heading',
	class extends CustomElement {
		constructor() {
			super();
		}
		
		connectedCallback() {
			const heading = link(this.dataset.heading)
			const paragraphs = link(this.dataset.paragraphs)

			this.innerHTML = `
				<h1>${heading}</h1>
				${wrap`<p>${paragraphs}</p>`}
			`
		}
	}
);
