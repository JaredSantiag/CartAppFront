import { useReducer, useState } from "react"
import { productReducer } from "../reducer/productReducer";
import { getProducts } from "../services/productService";
import Swal from "sweetalert2";

const initialProducts = getProducts();

const initialProductForm = {
    id: 0,
    name: '',
    description: '',
    price: 0
}

export const useProduct = () => {

    const [products, dispatch] = useReducer(productReducer, initialProducts);

    const [productSelected, setProductSelected] = useState(initialProductForm);

    const handlerAddProduct = (product) => {
        let type;
        if (product.id === 0) {
            type = 'addPruduct';
        }
        else {
            type = 'updatePruduct';
        }
        dispatch({
            type,
            payload: product
        })

        Swal.fire(
            (product.id === 0) ?
                'Producto creado' :
                'Producto actualizado',
            (product.id === 0) ?
                'El producto ha sido creado correctamente' :
                'El producto ha sido actualizado correctamente',
            'success'
        )
    }

    const handlerRemoveProduct = (id) => {
        Swal.fire({
            title: '¿Esta seguro que desea elimina?',
            text: "Cuidado, el producto sera eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'removeProduct',
                    payload: id
                })
                Swal.fire(
                    'Producto eliminado',
                    'Producto eliminado correctamente',
                    'success'
                )
            }
        })
    }

    const handlerProductSelectForm = (product) => {
        setProductSelected({ ...product });
    }

    return {
        products,
        initialProductForm,
        productSelected,
        handlerAddProduct,
        handlerRemoveProduct,
        handlerProductSelectForm
    }

}