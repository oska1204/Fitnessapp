import data from '/js/utils/data.js'

class CustomElement extends HTMLElement {
    constructor() {
        super()
        data.bind(this)();
    }

    setData() {
        // To avoid error
    }

    get data() {
        return this._data
    }

    set data(obj) {
        this._data = obj
        this.setData()
    }
}

window.CustomElement = CustomElement
