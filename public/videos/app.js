import '/src/js/main.js'

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

{
    window.data = data

    const mainHeading = document.querySelector('c-main-heading')
    const videosSection = document.querySelector('c-videos-section')

    mainHeading.data.heading = data.main.heading
    mainHeading.data.paragraphs = data.main.paragraphs

    videosSection.data.categories = data.main.categories

    mainHeading.tempUpdate()
    videosSection.tempUpdate()

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
