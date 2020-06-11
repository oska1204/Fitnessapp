customElements.define(
	'c-create-plan',
	class extends CustomElement {
		constructor() {
			super();
            
            this.innerHTML = `
                <input class="input-heading" placeholder="Skriv en title på programmet...">
                <input placeholder="Lav en beskrivende tekst til programmet. Skriv om formål og fitness niveau.">
                <article>
                    <h3>Squats</h3>
                    <p>Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.</p>
                    <div class="video">
                        <iframe src="https://www.youtube.com/embed/-FlxM_0S2lA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </article>
                <div class="buttons">
                    <button class="btn add-training"><span>+</span> Tilføj træning?</button>
                    <button class="btn save-program">Gem</button>
                </div>
            `

            const addTraining = this.querySelector('.add-training')
            const saveProgram = this.querySelector('.add-training')

            addTraining.addEventListener('click', function () {
                document.body.insertAdjacentHTML('beforeend', `
                    <link rel="stylesheet" href="/css/videos.css">
                    <c-modal class="small">
                        <c-add-training>
                        </c-add-training>
                    </c-modal>
                `)

                const videosSection = document.querySelector('c-modal c-videos-section')

                const data = {
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
                }

                videosSection.processData(data)
            })
		}
	}
);
