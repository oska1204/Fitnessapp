import CustomElement from '/js/utils/custom-element.js'

import '/js/web-components/modal.js'

customElements.define(
    'c-login-modal',
    class extends CustomElement {
        constructor() {
            super()
            this.innerHTML = `
            <c-modal>
                <form class="login">
                    <h1>Log ind</h1>
                    <input type="text" placeholder="Email">
                    <input type="password" placeholder="Password" autocomplete="current-password">
                    <button>Log mig ind</button>
                </form>
            </c-modal>
            `
        }
    }
)