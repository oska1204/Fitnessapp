customElements.define('modal-', class extends WebKey {
    constructor() {
        super()
    }

    contentLoaded() {
        const {
            addElms,
            query,
            setEventListener,
            closeModal,
        } = this

        addElms({
            exitBtn: query('.exit-btn'),
            wrapper: query('.wrapper'),
        })

        const {
            exitBtn,
            wrapper,
        } = this.elms
        
        document.documentElement.style.overflow = 'hidden'

        setEventListener(wrapper, 'click', (event) => {
            if (wrapper === event.target)
                closeModal()
        })

        setEventListener(exitBtn, 'click', (event) => {
            closeModal()
        })

        document.addEventListener('keydown', this.escapeModal)
    }
    
    closeModal = (modal = this) => {
        const confirmed = modal.getAttribute('data-confirm') ? confirm(modal.dataset.confirm) : true
        if (confirmed) {
            modal.remove()
            if (!document.querySelector('modal-'))
                document.documentElement.style.overflow = ''
        }
    }

    escapeModal = (e) => {
        const modal = document.querySelector('modal-:last-of-type')
        if (e.code === 'Escape' && modal)
            this.closeModal(modal)
    }
})
