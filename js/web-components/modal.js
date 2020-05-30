import CustomElement from '/js/utils/custom-element.js'

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
            this.nodes.modalWrapper = this.querySelector('.modal-wrapper')
            this.nodes.modalWrapper.appendChild(template.content)
        }
    }
)
