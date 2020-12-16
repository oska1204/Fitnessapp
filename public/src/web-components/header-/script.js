customElements.define('header-', class extends WebKey {
    constructor() {
        super('signed_out')
    }

    static get observedAttributes() {
        return ['signed_out']
    }

    set_signed_out = (value) => {
        return value !== null || value !== false
    }

    render_signed_out = () => {
        const { wrapper } = this.elms

        switch (this.signed_out) {
            case true:
                wrapper.setAttribute('signed_out', '')
                break

            case false:
                wrapper.removeAttribute('signed_out')
                break
        }
    }

    contentLoaded() {
        const sr = this.shadowRoot

        const wrapper = sr.querySelector('.wrapper')
        const btnToggleTheme = sr.querySelector('.btn-toggle-theme')
        const logOut = sr.querySelector('.log-out')
        const deleteUser = sr.querySelector('.delete-user')

        Object.assign(this.elms, {
            wrapper,
            btnToggleTheme,
            logOut,
            deleteUser,
        })

        btnToggleTheme.addEventListener('click', toggleTheme)
        logOut.addEventListener('click', this.logOutFn)
        deleteUser.addEventListener('click', deleteUserFn)
    }

    logOutFn = (event) => {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            location = '/log-in'
        }).catch(function (error) {
            // An error happened.
        });
    }
})
