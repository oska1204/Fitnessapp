export default function wrap([startTag, endTag], ...strings) {
    if (typeof strings[0] === 'object')
        strings = strings[0]
    return strings.map(string => {
        return startTag + string + endTag
    }).join('')
}
