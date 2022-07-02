export const FilterReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCT_SORT':
            return {
                ...state,
                sort: action.payload
            }
        case 'SET_PRODUCT_REVIEWED_BY':
            return {
                ...state,
                atleastReviewedBy: action.payload
            }
        case 'SET_PRODUCT_RATING':
            return {
                ...state,
                rating: action.payload
            }
        case 'SET_PRODUCT_SEARCH':
            return {
                ...state,
                searchQuery: action.payload
            }
        case 'SET_CLEAR':
            return {
                sort: 'lowToHigh',
                atleastReviewedBy: 100,
                rating: 5,
                searchQuery: ''
            }
        default:
            return state
    }
}