customElements.define(
    'c-modal',
    class extends CustomElement {
        constructor() {
            super()
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

            const close = function () {
                const confirmed = self.getAttribute('data-confirm') ? confirm(self.dataset.confirm) : true
                if (confirmed) {
                    self.remove()
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
        }
    }
)
