import data from '/js/utils/data.js'
import html from '/js/utils/html.js'
import temp from '/js/utils/temp.js'
import wrap from '/js/utils/wrap.js'

export default class CustomElement extends HTMLElement {
    constructor() {
        super()
        this.nodes = {};
        this.state = {};
        this.data = data
        this.html = html
        this.temp = temp
        this.wrap = wrap
        data(this.state, this.dataset);
    }
}