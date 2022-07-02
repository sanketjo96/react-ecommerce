export const sortProduct = (products, filter) => {
    console.log(filter)
    let sortedProduct = []
    if (filter.sort) {
        sortedProduct = products.sort((a, b) => {
            return filter.sort === 'lowToHigh' ? a.price - b.price : b.price - a.price;
        })
    }

    if (filter.atleastReviewedBy) {
        sortedProduct = sortedProduct.filter(item => item.rating.count <= parseInt(filter.atleastReviewedBy, 10))
    }

    if (filter.rating) {
        sortedProduct = sortedProduct.filter(item => item.rating.rate <= filter.rating)
    }

    if (filter.searchQuery) {
        sortedProduct = sortedProduct.filter(item => item.title.toLowerCase().includes(filter.searchQuery))
    }

    return sortedProduct
}