class ModalLogin extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <link rel="stylesheet" href="css/login.css">
            <div class="modal">
                <div class="login">
                    <h1>Log ind</h1>
                    <input type="text" placeholder="Email">
                    <input type="password" placeholder="Password">
                    <button>Log mig ind</button>
                </div>
            </div>
        `
    }
}
customElements.define('modal-login', ModalLogin);