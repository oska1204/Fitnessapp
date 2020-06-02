import data from '/js/utils/data.js'
import temp from '/js/utils/temp.js'
import wrap from '/js/utils/wrap.js'
import wrapArr from '/js/utils/wrapArr.js'

class CustomElement extends HTMLElement {
    constructor() {
        super()
        this.data = {};
        this.temp = temp
        this.wrap = wrap
        this.wrapArr = wrapArr
        data(this.data, this.dataset);
    }
}

window.CustomElement = CustomElement
