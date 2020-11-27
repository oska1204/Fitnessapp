import './utils/custom-element.js'
import './utils/web-key.js'
import './utils/utils.js'
import './utils/web-components.js'
import './utils/temp-web-components.js'

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