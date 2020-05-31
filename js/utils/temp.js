export default function temp(node) {
    const template = document.createElement('template')
    template.innerHTML = ' '
    template.content.firstChild.replaceWith(...node.childNodes)
    return template
}
