import html from '/js/utils/html.js'

import '/js/web-components/header.js'
import '/js/web-components/main-heading.js'
import '/js/web-components/videos-section.js'

const data = {
    main: {
        heading: 'Videoer',
        paragraphs: 'Tryk på en video for at redigere den eller <a href="#">tilføj en ny video</a>'
    }
}

export default function videos() {
	const template = document.createElement('template');
	// Visual Studio Code: Ctrl K + M --> HTML
	// Visual Studio Code: Ctrl K + M --> Javascript
    template.innerHTML = html`
        <link rel="stylesheet" href="/css/videos.css">
        <header>
            <c-header></c-header>
        </header>
        <div class="wrapper">
            <main>
                <c-main-heading data-heading="${data.main.heading}" data-paragraphs="${data.main.paragraphs}">
                </c-main-heading>
                <c-videos-section>
                </c-videos-section>
            </main>
        </div>
	`;

	document.body.appendChild(template.content);
}