import '/src/js/main.js'

const form = document.querySelector('form')
const email = document.querySelector('[type="email"]')
const password = document.querySelector('[type="password"]')

form.addEventListener('submit', e => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((user) => {
        // Signed in 
        // ...
        location = '/'
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
    });
})