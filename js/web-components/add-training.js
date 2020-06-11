customElements.define(
	'c-add-training',
	class extends CustomElement {
		constructor() {
			super();
            
            this.innerHTML = `
                <div class="content">
                    <h2>Videoer</h2>
                    <c-videos-section></c-videos-section>
                </div>
            `
		}
	}
);
