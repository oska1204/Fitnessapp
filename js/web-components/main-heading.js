customElements.define(
	'c-main-heading',
	class extends CustomElement {
		constructor() {
			super();
		}

		connectedCallback() {
			const { heading, paragraphs } = this.data

			this.innerHTML = `
				<h1>${heading}</h1>
				${wrap`<p>${paragraphs}</p>`}
			`
		}
	}
);
