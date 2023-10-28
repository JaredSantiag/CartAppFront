import { useReducer, useEffect } from "react"
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";
import { productReducer } from "../reducer/productReducer";
import { getProducts } from "../services/productService";

const initialProducts = getProducts();

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    },[cartItems])

    const [products, dispatchProducts] = useReducer(productReducer, initialProducts);

    const handlerAddProduct = (product) => {
        dispatchProducts({
            type: 'addPruduct',
            payload: product
        })
    }

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if(hasItem){
            dispatch({
                type: UpdateQuantityProductCart,
                payload: product 
            });
        } else {
            dispatch({
                type: AddProductCart,
                payload: product
            });
        }
    }

    const handlerDeleteCart = (id) => {
        dispatch({
            type: DeleteProductCart,
            payload: id
        })
    }

    return {
        products,
        cartItems,
        handlerAddProduct,
        handlerAddProductCart,
        handlerDeleteCart
    }
}