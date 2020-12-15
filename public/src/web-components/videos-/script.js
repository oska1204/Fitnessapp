customElements.define('videos-', class extends WebKey {
    constructor() {
        super()
    }

    contentLoaded() {
        const sr = this.shadowRoot

        const addVideo = sr.querySelector('.add-video')

        Object.assign(this.elms, {
            addVideo,
        })

        addVideo.addEventListener('click', this.addVideoFn)
    }
    
    addVideoFn = () => {
        document.body.insertAdjacentHTML('beforeend', `
            <modal- class="small">
                <add-video></add-video>
            </modal->
        `)
    }
})

