customElements.define('videos-', class extends WebKey {
    constructor() {
        super()
    }

    contentLoaded() {
        const {
            addElms,
            query,
            setEventListener,
        } = this

        addElms({
            addVideo: query('.add-video'),
        })

        const {
            addVideo,
        } = this.elms

        setEventListener(addVideo, 'click', (event) => {
            document.body.insertAdjacentHTML('beforeend', `
                <modal- class="small">
                    <add-video></add-video>
                </modal->
            `)
        })
    }
})
