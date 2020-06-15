customElements.define(
	'c-main-heading',
	class extends CustomElement {
		constructor() {
			super();
		}

		setData() {
			this.innerHTML = `
				<h1>${this.data.heading}</h1>
				${wrap`<p>${this.data.paragraphs}</p>`}
			`
		}
	}
);
