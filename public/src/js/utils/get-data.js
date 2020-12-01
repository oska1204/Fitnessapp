export default function getData() {
    const obj = this.dataset.raw ? getPath(this.dataset.raw) : {}
    for (const item in this.dataset) {
        if (item === 'raw') continue
        try {
            obj[item] = getPath(this.dataset[item])
        } catch (error) {
        }
    }
    this.data = obj
    return obj
}
