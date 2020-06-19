customElements.define(
    'c-videos-section',
    class extends CustomElement {
        constructor() {
            super()
        }

        connectedCallback() {
            const { categories } = this.data
            
            categories.forEach(category => {
                this.insertAdjacentHTML('beforeend', `
                    <div class="category">
                        <h3>${category.heading}</h3>
                        <c-video-ul data-ul="${setPath(category.ul)}"></c-video-ul>
                    </div>
                `);
            });            
        }
    }
);
