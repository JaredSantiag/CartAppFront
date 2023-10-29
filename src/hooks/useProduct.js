import { useReducer } from "react"
import { productReducer } from "../reducer/productReducer";
import { getProducts } from "../services/productService";

const initialProducts = getProducts();

export const useProduct = () => {

    const initialProductForm = {
        name:'',
        description:'',
        price:0
    }    
    
    const [products, dispatch] = useReducer(productReducer, initialProducts);
    
    const handlerAddProduct = (product) => {
        dispatch({
            type: 'addPruduct',
            payload: product
        })
    }

    const handlerRemoveProduct = (id) => {
        dispatch({
            type: 'removeProduct',
            payload: id
        })
    }

    return {
        products,
        initialProductForm,
        handlerAddProduct,
        handlerRemoveProduct
    }

}