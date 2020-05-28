import html from '/js/utils/html.js'

import '/js/web-components/header.js'
import '/js/web-components/main-heading.js'

const data = {
    main: {
        heading: 'Videoer',
        subText: 'Tryk på en video for at redigere den eller <a href="#">tilføj en ny video</a>'
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
                <c-main-heading data-heading="${data.main.heading}" data-sub-text="${data.main.subText}">
                </c-main-heading>
        
            const category = new Category(
                'Ben program',
                'Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.',
                'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.'
            );
            </main>
        </div>
	`;

	document.body.appendChild(template.content);
}