/*
// REQUIREMENT: Pass HTML in attributes with attribute="${`html`}" as opposed to attribute="html"

// Example:
  const template = document.createElement('template')
  template.innerHTML = html`
    <div data-html="${`<a href="#">link</a>`}">
    </div>
  `
  console.log(template)
// Output:
//  <template>
//    #document-fragment
//      <div data-html="<a href="#">link</a>">
//        </div>
//  </template>
*/

export default function html(strings, ...data) {
	let val = ''
	for (let i = 0; i < data.length; i++) {
		val += strings[i]
		let item = data[i]
		if (typeof item === 'object')
			item = JSON.stringify(item)
		val += item.replace(/"/g, '&#0034')
	}
	val += strings[strings.length - 1]
	return val
}
