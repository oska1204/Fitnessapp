export default function data(data, dataset) {
    for (const item in dataset) {
        try {
            data[item] = JSON.parse(dataset[item])
        } catch (error) {
            data[item] = dataset[item]
        }
    }
}
