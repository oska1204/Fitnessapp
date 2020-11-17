import '/js/utils/custom-element.js'
import '/js/utils/web-key.js'
import '/js/utils/utils.js'
import '/js/utils/web-components.js'
import '/js/utils/temp-web-components.js'

fetch('/basic-html/head.html')
    .then(e => e.text())
    .then(e => document.head.insertAdjacentHTML('afterbegin', e))
fetch('/basic-html/body.html')
    .then(e => e.text())
    .then(e => document.body.insertAdjacentHTML('afterbegin', e))

const classList = document.documentElement.classList
const isDark = JSON.parse(localStorage.getItem('darkTheme'))
switch (isDark) {
    case true:
        classList.add('dark-theme')
        break;

    case false:
        classList.add('light-theme')
        break;
}

window.addEventListener('load', function () {
    if (!window.customElements)
        document.body.insertAdjacentHTML('beforeend', '\
            <div class="warning">\
                <h1 style="margin-bottom: 1rem;">It doesn\'t work in older browsers (Edge/Internet Explorer).</h1>\
                <h1>Or an Error happend</h1>\
            </div>\
        ')
})
