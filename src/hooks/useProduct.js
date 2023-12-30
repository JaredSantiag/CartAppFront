import { useContext, useReducer, useState } from "react"
import { productReducer } from "../reducer/productReducer";
import { findAll, getProducts, remove, save, update } from "../services/productService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

// const initialProducts = await getProducts();
const initialProducts = [];

const initialProductForm = {
    id: 0,
    name: '',
    description: '',
    price: 0
}

const initialErrors = {
    name: '',
    description: '',
    price: null
}

export const useProduct = () => {

    const [products, dispatch] = useReducer(productReducer, initialProducts);

    const [productSelected, setProductSelected] = useState(initialProductForm);

    const [visibleForm, setVisibleForm] = useState(false);

    const [errors, setErrors] = useState(initialErrors)

    const navigate = useNavigate();

    const { login, handlerLogout } = useContext(AuthContext);

    const getProducts = async () => {
        const result = await findAll();
        console.log(result);
        dispatch({
            type: 'loadingProducts',
            payload: result.data
        });
    }

    const handlerAddProduct = async (product) => {

        if (!login.isAdmin) return;

        let response;

        try {

            if (product.id == 0) {
                response = await save(product);
            } else {
                response = await update(product);
            }

            dispatch({
                type: (product.id === 0) ? 'addPruduct' : 'updatePruduct',
                payload: response.data
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
            navigate('products');

        } catch (error) {
            if (error.response && error.response.status == 400) {
                setErrors(error.response.data);
            } else if (error.response && error.response.status == 500 && error.response.data?.message?.includes('constraint')) {
                setErrors({ name: 'Ya existe un producto con el mismo nombre' })
            } else if (error.response?.status == 401) {
                handlerLogout();
            }
            else {
                throw error;
            }
        }
    }

    const handlerRemoveProduct = (id) => {

        if (!login.isAdmin) return;

        Swal.fire({
            title: '¿Esta seguro que desea elimina?',
            text: "Cuidado, el producto sera eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
        }).then( async(result) => {
            if (result.isConfirmed) {
                try {
                    await remove(id);
                    dispatch({
                        type: 'removeProduct',
                        payload: id
                    })
                    Swal.fire(
                        'Producto eliminado',
                        'Producto eliminado correctamente',
                        'success'
                    )
                } catch (error) {
                    if (error.response?.status == 401) {
                        handlerLogout();
                    }
                }
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
        setErrors({})
    }

    return {
        products,
        initialProductForm,
        productSelected,
        visibleForm,
        errors,
        handlerAddProduct,
        handlerRemoveProduct,
        handlerProductSelectForm,
        handlerOpenForm,
        handlerCloseForm,
        getProducts
    }

}