export const ProductReducer = (state, action) => {
    switch(action.type) {
        case 'PRODUCT_LOAD':
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}