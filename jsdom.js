const fs = require('fs')
const { JSDOM } = require('jsdom')

const vdom = new JSDOM()
const window = vdom.window
const document = window.document

const arr = fs.readFileSync('public/src/js/utils/temp-web-components.js', 'utf8').split('\n').map(e=>e.replace('import \'', 'public').replace(/script\.js'$/, 'template.html'))

const html = arr.map(e=>new JSDOM(fs.readFileSync(e, 'utf8')))
console.log(html.map(e=>e))