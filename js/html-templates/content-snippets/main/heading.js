customElements.define(
	'c-main--heading',
	class extends HTMLElement {
		constructor() {
			super();
		}
		set _data(data) {
			this.innerHTML = `
            <h1>${data.heading}</h1>
            <p>${data.subText}</p>
        `;
		}
	}
);
