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

    const [visibleForm, setVisibleForm] = useState(false);

    const handlerAddProduct = (product) => {

        dispatch({
            type: (product.id === 0)? 'addPruduct' : 'updatePruduct',
            payload: product
        });

        Swal.fire(
            (product.id === 0) ?
                'Producto creado' :
                'Producto actualizado',
            (product.id === 0) ?
                'El producto ha sido creado correctamente' :
                'El producto ha sido actualizado correctamente',
            'success'
        );

        handlerCloseForm();
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
        setVisibleForm(true);
        setProductSelected({ ...product });
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setProductSelected(initialProductForm);
    }

    return {
        products,
        initialProductForm,
        productSelected,
        visibleForm,
        handlerAddProduct,
        handlerRemoveProduct,
        handlerProductSelectForm,
        handlerOpenForm,
        handlerCloseForm
    }

}