customElements.define(
    'c-videos-section',
    class extends CustomElement {
        constructor() {
            super()

            this.processData = function (data) {
                data.categories.forEach(category => {
                    this.insertAdjacentHTML('beforeend', `
                        <div class="category">
                            <h3>${category.heading}</h3>
                            <ul>
                                ${
                                this.wrapArr`
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

            if (this.data.categories)
                this.processData(this.data)
        }
    }
);
