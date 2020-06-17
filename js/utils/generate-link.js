window.autoLink = []
export default function generateLink(data) {
    const link = window.autoLink.push(data) - 1
    return 'autoLink.' + link
}
