import { createContext, useEffect, useReducer } from "react";
import { CartReducer } from "../reducer/Cart.Reducer";
import { ProductReducer } from "../reducer/Product.Reducer";

export const StoreContext = createContext();

export const AppContext = (props) => {
    const [products, productDispatch] = useReducer(ProductReducer, {
        data: []
    })

    // Fetching products
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => productDispatch({type: 'PRODUCT_LOAD', payload: data}))
    }, [])


    const [cart, dispatch] = useReducer(CartReducer, {
        data: []
    })

    return (
        <StoreContext.Provider value={{ products, cart, dispatch }}>
            {props.children}
        </StoreContext.Provider>
    )
}