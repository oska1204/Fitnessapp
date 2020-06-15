export default function data() {
    const obj = {}
    for (const item in this.dataset) {
        try {
            obj[item] = JSON.parse(this.dataset[item])
        } catch (error) {
            obj[item] = this.dataset[item]
        }
    }
    this.data = obj
}
