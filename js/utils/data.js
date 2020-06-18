export default function data() {
    const obj = {}
    for (const item in this.dataset) {
        try {
            obj[item] = getPath(this.dataset[item])
        } catch (error) {
        }
    }
    this.data = obj
    return obj
}
