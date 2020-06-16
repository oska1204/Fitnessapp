export default function data() {
    const obj = {}
    for (const item in this.dataset) {
        try {
            obj[item] = link(this.dataset[item])
        } catch (error) {
        }
    }
    this.data = obj
}
