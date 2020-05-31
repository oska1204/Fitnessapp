import data from '/js/utils/data.js'
import temp from '/js/utils/temp.js'
import wrap from '/js/utils/wrap.js'

class CustomElement extends HTMLElement {
    constructor() {
        super()
        this.data = {};
        this.temp = temp
        this.wrap = wrap
        data(this.data, this.dataset);
    }
}

window.CustomElement = CustomElement
