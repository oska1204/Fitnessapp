customElements.define(
    'c-create-plan',
    class extends CustomElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = `
                <input class="input-heading" placeholder="Skriv en title på programmet...">
                <textarea placeholder="Lav en beskrivende tekst til programmet. Skriv om formål og fitness niveau."></textarea>
                <c-program data-program="${setPath([{heading: 'Squats', paragraphs: 'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.',video: 'https://www.youtube.com/embed/-FlxM_0S2lA'}])}">
                </c-program>
                <div class="buttons">
                    <button class="btn add-training"><span>+</span>Tilføj træning?</button>
                    <button class="btn save-program">Gem</button>
                </div>
            `

            const addTraining = this.querySelector('.add-training')
            const saveProgram = this.querySelector('.add-training')

            addTraining.addEventListener('click', function () {
                window.data.categories = [
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
                ]

                document.body.insertAdjacentHTML('beforeend', `
                    <c-modal class="small">
                        <div class="content">
                            <h1>Videoer</h1>
                            <c-videos-section data-categories="data.categories"></c-videos-section>
                        </div>
                    </c-modal>
                `)
            })
        }
    }
);
