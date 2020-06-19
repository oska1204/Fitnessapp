const data = {
    main: {
        heading: 'Videoer',
        paragraphs: 'Tryk på en video for at redigere den eller <a class="add-video" href="#">tilføj en ny video</a>',
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
                <c-main-heading data-heading="${setPath(data.main.heading)}" data-paragraphs="${setPath(data.main.paragraphs)}">
                </c-main-heading>
                <c-videos-section data-categories="${setPath(data.main.categories)}">
                </c-videos-section>
            </main>
        </div>
    `;
    
    document.body.appendChild(template.content);
    
    const addVideo = document.querySelector('.add-video')

    addVideo.addEventListener('click', function (event) {
        document.body.insertAdjacentHTML('beforeend', `
            <c-modal class="small">
                <form class="videos">
                    <input placeholder="Title">
                    <input placeholder="Beskrivelse">
                    <input placeholder="Video">
                    <div class="btn">Tilføj</div>
                </form>
            </c-modal>
        `)
    })
}
