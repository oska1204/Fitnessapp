customElements.define('create-plan', class extends WebKey {
    constructor() {
        super()
        this.elms = {}
        this.program = [{heading: 'Squats', paragraphs: 'Nesciunt at quia deserunt. Illo corrupti repellendus iste. Minima quo tenetur qui. Ut quos omnis laborum ut porro. Voluptatem.',video: 'https://www.youtube.com/embed/-FlxM_0S2lA'}]
    }
    
    contentLoaded() {
    }

    contentRemoved() {
    }

    static get observedAttributes() {
        return []
    }

    get program() {
        return this.data.program
    }

    set program(value) {
        this.data.program = value
        return true
    }

    render_program() {
    }
})

