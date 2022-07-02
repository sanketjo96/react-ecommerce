import { createContext, useEffect, useReducer } from "react";
import { CartReducer } from "../reducer/Cart.Reducer";
import { FilterReducer } from "../reducer/Filter.Reducer";
import { ProductReducer } from "../reducer/Product.Reducer";

export const StoreContext = createContext();

export const AppContext = (props) => {
    const [products, productDispatch] = useReducer(ProductReducer, {
        data: []
    })

    const [cart, dispatch] = useReducer(CartReducer, {
        data: []
    })

    const [filter, filterDispatch] = useReducer(FilterReducer, {
        sort: 'lowToHigh',
        atleastReviewedBy: 700,
        rating: 5,
        searchQuery: ''
    })

    // Fetching products
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => productDispatch({type: 'PRODUCT_LOAD', payload: data}))
    }, [])



    return (
        <StoreContext.Provider value={{ products, cart, filter, dispatch, filterDispatch }}>
            {props.children}
        </StoreContext.Provider>
    )
}