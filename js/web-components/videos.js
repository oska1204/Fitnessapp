class MainVideos extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <link rel="stylesheet" href="css/videos.css">
            <div class="main">
                <h1>Videoer</h1>
                <p>Tryk på en video for at redigere den eller <a href="#">tilføj en ny video</a></p>
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
            </div>
            `
    }
}
customElements.define('main--videos', MainVideos);