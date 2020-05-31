export default function sameUrl(event) {
    const url = new URL(event.target.href)
    let pathname = url.pathname
    if (!pathname.match(/\/$/)) pathname += '/'
    if (pathname === location.pathname) event.preventDefault()
}
