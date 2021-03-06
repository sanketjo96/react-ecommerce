export const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                data: [...state.data, { ...action.payload, qty: 1 }]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                data: state.data.filter((item) => item.id !== action.payload.id)
            }
        case 'UPDATE_PRODUCT_QTY':
            console.log(action)
            return {
                ...state,
                data: state.data.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            qty: parseInt(action.payload.qty, 10)
                        }
                    }
                    return item;
                })
            }
        default:
            return state
    }
}