customElements.define(
	'c-create-plan',
	class extends CustomElement {
		constructor() {
			super();
            
            this.innerHTML = `
                <h1>Skriv en title på programmet...</h1>
                <p>Lav en beskrivende tekst til programmet. Skriv om formål og fitness niveau.</p>
                <article>
                    <h3>Squats</h3>
                    <p>Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.</p>
                    <div class="video">
                        <iframe src="https://www.youtube.com/embed/-FlxM_0S2lA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </article>
                <button class="btn">Tilføj træning?</button>
            `
		}
	}
);
