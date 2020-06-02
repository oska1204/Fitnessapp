/*
// The first "${}" is where you put your arr,
// and the following ones are where you put the item name

// Example:
let arr = [
    {
        title: 'Hello There',
        paragraphs: 'Single paragraph.',
    },
    {
        title: 'General Kenobi',
        paragraphs: [
            'First paragraph.',
            'Second paragraph.',
        ],
    },
]
let template = document.createElement('template')
template.innerHTML = wrapArr`
    ${arr}
    <h1>${'title'}</h1>
    ${[
        '<p>',
        'paragraphs',
        '</p>',
    ]}
`
console.log(template.content)

// Logs:
// #document-fragment
//   <h1>​Hello There​</h1>​
//   <p>​Single paragraph.​</p>​
//   <h1>​General Kenobi​</h1>​
//   <p>​First paragraph.​</p>​
//   <p>​Second paragraph.​</p>​
*/

export default function wrapArr(strings, arr, ...data) {
    return arr.map(obj => {
        let val = ''
        for (let i = 0; i < data.length; i++) {
            val += strings[i + 1]
            let item = obj[data[i]]
            const startTag = data[i][0]
            const content = obj[data[i][1]]
            const endTag = data[i][2]
            if (!item)
                item = startTag + content + endTag
            if (typeof content === 'object') {
                val += content.map(f => {
                    return startTag + f + endTag
                }).join('');
            } else {
                val += item
            }
        }
        val += strings[strings.length - 1]
        return val
    }).join('')
}