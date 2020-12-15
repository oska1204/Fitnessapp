customElements.define('header-', class extends WebKey {
    constructor() {
        super()
    }

    contentLoaded() {
        const sr = this.shadowRoot

        const btnToggleTheme = sr.querySelector('.btn-toggle-theme')
        const logOut = sr.querySelector('.log-out')

        Object.assign(this.elms, {
            btnToggleTheme,
            logOut,
        })

        btnToggleTheme.addEventListener('click', toggleTheme)
        logOut.addEventListener('click', this.logOutFn)
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
