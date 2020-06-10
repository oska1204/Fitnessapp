customElements.define(
    'c-modal',
    class extends CustomElement {
        constructor() {
            super()
            const template = this.temp(this)
            this.innerHTML = `
                <div class="modal-wrapper">
                </div>
            `
            const modalWrapper = this.querySelector('.modal-wrapper')
            modalWrapper.appendChild(template.content)

            this.addEventListener('click', function (event) {
                if (this === event.target)
                    this.parentNode.removeChild(this)
            })
        }
    }
)
