customElements.define(
	'c-main--heading',
	class extends HTMLElement {
		#nodes = {}
		
		constructor() {
			super();
			this.insertAdjacentHTML('beforeend', `
            	<h1></h1>
				<p></p>
			`)
			this.#nodes.heading = this.querySelector('h1')
			this.#nodes.subText = this.querySelector('p')
		}

		set _heading(html) {
			this.#nodes.heading.innerHTML = html
		}
		
		set _subText(html) {
			this.#nodes.subText.innerHTML = html
		}
	}
);
