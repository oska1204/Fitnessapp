customElements.define('header-', class extends WebKey {
    constructor() {
        super()
    }

    contentLoaded() {
        const {
            addElms,
            query,
            setEventListener,
        } = this

        addElms({
            btnToggleTheme: query('.btn-toggle-theme'),
            logOut: query('.log-out'),
        })

        const {
            btnToggleTheme,
            logOut,
        } = this.elms

        setEventListener(btnToggleTheme, 'click', toggleTheme)

        setEventListener(logOut, 'click', (e) => {
            firebase.auth().signOut().then(function () {
                // Sign-out successful.
                location = '/log-in'
            }).catch(function (error) {
                // An error happened.
            });
        })
    }
})
