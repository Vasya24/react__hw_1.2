export default class Item {
    constructor(entity) {
        Object.assign(this, {
            brand: 'Brand',
            title: 'Title',
            description: 'Description',
            descriptionFull: 'Full description',
            price: 0,
            currency: '£'
        }, entity)
    }
}