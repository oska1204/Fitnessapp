import CustomElement from '/js/utils/custom-element.js';

customElements.define(
	'c-videos-section',
	class extends CustomElement {
		constructor() {
			super();
			this.innerHTML = `
                <div class="category">
                    <h3>Ben</h3>
                    <ul>
                        <li>
                            <div class="video-thumbnail">
                                <img src="https://img.youtube.com/vi/-FlxM_0S2lA/default.jpg">
                            </div>
                            <div class="info">
                                <h3>Squats</h3>
                                <p class="text-overflow">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum possimus iste atque nesciunt consequatur dicta! Earum, molestiae. Molestias laborum sint soluta sunt animi commodi laudantium recusandae excepturi unde blanditiis.</p>
                            </div>
                        </li>
                        <li>
                            <div class="video-thumbnail">
                                <img src="https://img.youtube.com/vi/-FlxM_0S2lA/default.jpg">
                            </div>
                            <div class="info">
                                <h3>Squats</h3>
                                <p class="text-overflow">Nesciunt at quia deserunt. Illo corrupti repellendus iste...</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="category">
                    <h3>Skuldre</h3>
                    <ul>
                        <li>
                            <div class="video-thumbnail">
                                <img src="https://img.youtube.com/vi/-FlxM_0S2lA/default.jpg">
                            </div>
                            <div class="info">
                                <h3>Squats</h3>
                                <p class="text-overflow">Nesciunt at quia deserunt. Illo corrupti repellendus iste...</p>
                            </div>
                        </li>
                    </ul>
                </div>
			`;
		}
	}
);
