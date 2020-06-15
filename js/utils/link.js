window.link = function (strArr) {
    const arr = strArr.split('.')
    let path = window.data
    arr.forEach(e => path = path[e])
    return path
}
