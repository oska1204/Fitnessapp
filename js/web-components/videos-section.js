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
                        <ul>
                            ${wrapArr`
                                ${category.ul}
                                <li>
                                    <div class="video-thumbnail">
                                        <img src="${'image'}">
                                    </div>
                                    <div class="info">
                                        <h3>${'heading'}</h3>
                                        ${[
                                            '<p class="text-overflow">',
                                                'paragraphs',
                                            '</p>'
                                        ]}
                                    </div>
                                </li>
                            `}
                        </ul>
                    </div>
                `);
            });            
        }
    }
);
