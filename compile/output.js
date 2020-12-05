const fs = require('fs');
const { JSDOM } = require('jsdom');
const { window } = new JSDOM(`<!DOCTYPE html>`);
const { html: beautify_html } = require('js-beautify');

Object.assign(global, {
    document: window.document,
    HTMLElement: window.HTMLElement,
    customElements: window.customElements,
    window,
});

const getName = e => e.match(/.*\/(?<name>.*)\/template\.html/).groups.name

const templateArr = JSON.parse(fs.readFileSync('./compile/output/template.json', 'utf8'))
const indexArr = JSON.parse(fs.readFileSync('./compile/output/index.json', 'utf8'))

templateArr.forEach(e => {
    const html = fs.readFileSync(e)
    customElements.define(getName(e), class extends HTMLElement {
        connectedCallback() {
            this.innerHTML = html;
            this.innerHTML = this.querySelector('.wrapper').innerHTML
        }
    });
});

templateArr.forEach(e => {
    document.body.innerHTML = fs.readFileSync(e);
    const path = e.replace(/template\.html$/, 'output.html')
    const html = document.querySelector('.wrapper').innerHTML
    fs.writeFileSync(path, beautify_html(html));
})

indexArr.forEach(e => {
    document.documentElement.innerHTML = fs.readFileSync(e);
    const path = e.replace(/index\.html$/, 'output.html')
    const html = document.documentElement.innerHTML
    fs.writeFileSync(path, beautify_html(html));
})
