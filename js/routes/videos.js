const data = {
    main: {
        heading: 'Videoer',
        paragraphs: 'Tryk på en video for at redigere den eller <a href="#">tilføj en ny video</a>',
        categories: [
            {
                heading: 'Ben<a href="#">f</a>',
                ul: [
                    {
                        image: 'https://img.youtube.com/vi/-FlxM_0S2lA/default.jpg',
                        heading: 'Squats',
                        paragraphs: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum possimus iste atque nesciunt consequatur dicta! Earum, molestiae. Molestias laborum sint soluta sunt animi commodi laudantium recusandae excepturi unde blanditiis.',
                    },
                    {
                        image: 'https://img.youtube.com/vi/-FlxM_0S2lA/default.jpg',
                        heading: 'Squats',
                        paragraphs: 'Nesciunt at quia deserunt. Illo corrupti repellendus iste...',
                    },
                ],
            },
            {
                heading: 'Skuldre',
                ul: [
                    {
                        image: 'https://img.youtube.com/vi/-FlxM_0S2lA/default.jpg',
                        heading: 'Squats',
                        paragraphs: [
                            'Nesciunt at quia deserunt. Illo corrupti repellendus iste...',
                            'Nesciunt at quia deserunt. Illo corrupti repellendus iste...',
                        ],
                    },
                ],
            },
        ],
    },
}

export default function videos() {
    window.data = data
    
    const template = document.createElement('template');
    // Visual Studio Code: Ctrl K + M --> HTML
    // Visual Studio Code: Ctrl K + M --> Javascript
    template.innerHTML = `
        <header>
            <c-header></c-header>
        </header>
        <div class="wrapper">
            <main>
                <c-main-heading data-heading="data.main.heading" data-paragraphs="data.main.paragraphs">
                </c-main-heading>
                <c-videos-section data-categories="data.main.categories">
                </c-videos-section>
            </main>
        </div>
	`;

    document.body.appendChild(template.content);
}
