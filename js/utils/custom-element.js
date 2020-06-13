import data from '/js/utils/data.js'

class CustomElement extends HTMLElement {
    constructor() {
        super()
        this.data = {};
        data(this.data, this.dataset);
    }
}

window.CustomElement = CustomElement
