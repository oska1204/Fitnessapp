import data from '/js/utils/data.js'

/*
// Create CustomElement
customElements.define(
    'c-element',
    class extends CustomElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = `
                <h1>${this.data.heading}</h1>
            `
        }
    }
);

// There are two ways to pass data
// 1. Path to the data from window
    window.path = {
        heading: 'Heading 1'
    }
    document.body.insertAdjacentHTML('beforeend', `
        <c-element data-heading="path.heading"></c-element>
    `)

// 2. Set data manually
    const element = document.createElement('c-element')
    element.data = {
        heading: 'Heading 2'
    }
    document.body.appendChild(element)
*/

class CustomElement extends HTMLElement {
    constructor() {
        super()
        data.bind(this)();
    }

    get data() {
        return this._data
    }

    set data(obj) {
        this._data = obj
    }
}

window.CustomElement = CustomElement
