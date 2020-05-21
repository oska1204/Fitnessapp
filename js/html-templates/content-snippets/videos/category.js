import Template from '../_template.js';
export default class category extends Template {
	constructor() {
		super();
		this.template = this.htmlTemplate(`
            <div class="category">
                <h3>Ben</h3>
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
        `);
	}
}
