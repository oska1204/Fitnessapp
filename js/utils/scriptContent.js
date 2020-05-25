export default function scriptContent() {
    document.querySelectorAll('script[content]').forEach((e, i) => {
        e.parentNode.dataset.id = i
        const script = document.createElement('script')
        script.text = `{
            const self = document.querySelector('[data-id="${i}"]');
            self.removeAttribute('data-id');
            ${e.text}
        }`
        document.head.appendChild(script)
        document.head.removeChild(script)
        e.parentNode.removeChild(e)
    })
}