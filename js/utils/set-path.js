const path = '_autoPath'
window[path] = []
export default function setPath(data) {
    const link = window[path].push(data) - 1
    return `${path}.${link}`
}
