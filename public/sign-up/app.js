import '/src/js/main.js'

const form = document.querySelector('form')
const email = document.querySelector('[type="email"]')
const password = document.querySelector('[type="password"]')
const errorElm = document.querySelector('.error')

form.addEventListener('submit', e => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((user) => {
        // Signed in 
        // ...
        location = '/'
        errorElm.setAttribute('hidden', '')
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        errorElm.innerHTML = error.code + ': ' + error.message
        errorElm.removeAttribute('hidden')
    });
})