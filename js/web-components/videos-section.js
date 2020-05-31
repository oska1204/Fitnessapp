customElements.define(
    'c-videos-section',
    class extends CustomElement {
        constructor() {
            super()

            this.data.categories.forEach(category => {
                this.insertAdjacentHTML('beforeend', `
                    <div class="category">
                        <h3>${category.heading}</h3>
                        <ul>
                            ${this.ul(category.ul)}
                        </ul>
                    </div>
                `);
            });
        }
        
        ul(ul) {
            return ul.map(li => `
                <li>
                    <div class="video-thumbnail">
                        <img src="${li.image}">
                    </div>
                    <div class="info">
                        <h3>${li.heading}</h3>
                        ${this.wrap`<p class="text-overflow">${li.paragraphs}</p>`}
                    </div>
                </li>
            `
            ).join('')
        }
    }
);
