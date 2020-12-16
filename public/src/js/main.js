import './utils/custom-element.js'
import './utils/web-key.js'
import './utils/utils.js'
import './utils/web-components.js'
import './utils/temp-web-components.js'

window.addEventListener('load', function () {
    if (!window.customElements)
        document.body.insertAdjacentHTML('beforeend', '\
            <div class="warning">\
                <h1 style="margin-bottom: 1rem;">It doesn\'t work in older browsers (Edge/Internet Explorer).</h1>\
                <h1>Or an Error happend</h1>\
            </div>\
        ')
})

const headerElm = document.querySelector('header-')

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // ...
        headerElm.removeAttribute('signed_out')
    } else {
        headerElm.setAttribute('signed_out', '')
        // User is signed out
        // ...
        // switch (location.pathname) {
        //     case '/sign-up/':
        //     case '/log-in/':
        //         break;

        //     default:
        //         location = '/log-in/'
        //         break;
        // }
    }
});

window.deleteUserFn = function () {
    const response = prompt('Type "confirm" to delete you account.')
    if (response === 'confirm') {
        firebase.auth().currentUser.delete()
            .then(function () {
                // User deleted.
                document.body.insertAdjacentHTML('beforeend', `<modal->You have deleted your account</modal->`)
            }).catch(function (error) {
                // An error happened.
                document.body.insertAdjacentHTML('beforeend', `<modal->${error}</modal->`)
            });
    }
}
