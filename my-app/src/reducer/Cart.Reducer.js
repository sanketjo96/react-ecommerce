export const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                data: [...state.data, {...action.payload, qty: 1}]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                data: state.data.filter((item) => item.id !== action.payload.id)
            }
        default:
            return state
    }
}