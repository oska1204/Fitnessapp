export default function link(strArr) {
    const arr = strArr.split('.')
    let path = window
    arr.forEach(e => path = path[e])
    return path
}
