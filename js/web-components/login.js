customElements.define(
    'c-login',
    class extends CustomElement {
        constructor() {
            super()
        }
        
        connectedCallback() {
            this.innerHTML = `
                <div class="content">
                    <form>
                        <h1>Log ind</h1>
                        <input type="text" placeholder="Email">
                        <input type="password" placeholder="Password" autocomplete="current-password">
                        <button>Log mig ind</button>
                    </form>
                </div>
            `            
        }
    }
)
