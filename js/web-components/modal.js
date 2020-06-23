customElements.define(
    'c-modal',
    class extends CustomElement {
        constructor() {
            super()
        }

        connectedCallback() {
            const self = this

            document.documentElement.style.overflow = 'hidden'

            const template = temp(this)
            this.innerHTML = `
                <div class="modal-wrapper">
                    <span class="exit-btn">x</span>
                </div>
            `
            const modalWrapper = this.querySelector('.modal-wrapper')
            modalWrapper.appendChild(template.content)

            const close = function (modal = self) {
                const confirmed = self.getAttribute('data-confirm') ? confirm(self.dataset.confirm) : true
                if (confirmed) {
                    modal.remove()
                    if (!document.querySelector('c-modal'))
                        document.documentElement.style.overflow = ''
                }
            }

            this.addEventListener('click', function (event) {
                if (this === event.target)
                    close()
            })

            const exitBtn = this.querySelector('.exit-btn')
            exitBtn.addEventListener('click', function (event) {
                close()
            })

            document.removeEventListener('keydown', window.escapeModal)
            window.escapeModal = function (e) {
                const modal = document.querySelector('c-modal:last-of-type')
                if (e.code === 'Escape' && modal)
                    close(modal)
            }
            document.addEventListener('keydown', window.escapeModal)
        }
    }
)
