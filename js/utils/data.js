export default function data(state, dataset) {
    for (const item in dataset) {
        try {
            state[item] = JSON.parse(dataset[item])
        } catch (error) {
            state[item] = dataset[item]
        }
    }
}