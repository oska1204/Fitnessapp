customElements.define('modal-', class extends WebKey {
    constructor() {
        super()
    }

    contentLoaded() {
        const sr = this.shadowRoot

        const exitBtn = sr.querySelector('.exit-btn')
        const wrapper = sr.querySelector('.wrapper')

        Object.assign(this.elms, {
            exitBtn,
            wrapper,
        })

        document.documentElement.style.overflow = 'hidden'

        wrapper.addEventListener('click', this.wrapperFn)
        exitBtn.addEventListener('click', this.exitBtnFn)
        document.addEventListener('keydown', this.escapeModal)
    }
    
    wrapperFn = (event) => {
        const { wrapper } = this.elms
        if (wrapper === event.target)
            this.closeModal()
    }
    
    exitBtnFn = (event) => {
        this.closeModal()
    }
    
    escapeModal = (event) => {
        const modal = document.querySelector('modal-:last-of-type')
        if (event.code === 'Escape' && modal)
        this.closeModal(modal)
    }
    
    closeModal = (modal = this) => {
        const confirmed = modal.getAttribute('data-confirm') ? confirm(modal.dataset.confirm) : true
        if (confirmed) {
            modal.remove()
            if (!document.querySelector('modal-'))
                document.documentElement.style.overflow = ''
        }
    }
})
