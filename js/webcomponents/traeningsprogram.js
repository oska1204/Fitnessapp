class MainTraeaeningsprogram extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <link rel="stylesheet" href="css/traeningsprogram.css">
            <main>
                <h1>Træningsprogram</h1>
                <p>Tryk på en plan for at ændre den eller <a href="#">opret en ny plan</a></p>
                <article>
                    <h3>Ben program</h3>
                    <p>Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.</p>
                    <p>Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.</p>
                </article>
                <article>
                    <h3>Overkrop øvelser program</h3>
                    <div class="video">
                        <iframe width="640" height="360" src="https://www.youtube.com/embed/-FlxM_0S2lA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <p>Consequuntur maiores et dicta neque. Deserunt ab dolor odio. Sunt sit enim numquam nostrum aperiam corrupti et officia.</p>
                    <p>Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.</p>
                </article>
            </main>
        `
    }
}
customElements.define('main-traeningsprogram', MainTraeaeningsprogram);