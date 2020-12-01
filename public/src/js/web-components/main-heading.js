customElements.define(
	'c-main-heading',
	class extends CustomElement {
		constructor() {
			super();
		}

		tempUpdate() {
			const { heading, paragraphs } = this.data

			this.innerHTML = `
				<h2>${heading}</h2>
				${wrap`<p>${paragraphs}</p>`}
			`
		}
	}
);
