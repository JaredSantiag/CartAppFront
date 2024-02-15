import { findAll, remove, save, update } from "../services/productService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";;
import { useDispatch, useSelector } from "react-redux";
import { initialProductForm, addPruduct, removeProduct, updatePruduct, loadingProducts, onProductSelectForm, onOpenForm, onCloseForm, loadingError } from "../store/slices/products/productsSlice";
import { useAuth } from "../auth/hooks/useAuth";

// const initialProducts = await getProducts();
export const useProduct = () => {

    const {products, productSelected, visibleForm, errors, isLoading} = useSelector(state => state.products)
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { login, handlerLogout } = useAuth();

    const getProducts = async () => {
        try {
            const result = await findAll();
            console.log(result);
            dispatch(loadingProducts(result.data));
        } catch (error) {
            if (error.response?.status == 401) {
                handlerLogout();
            }
        }
    }

    const handlerAddProduct = async (product) => {

        if (!login.isAdmin) return;

        let response;

        try {

            if (product.id == 0) {
                response = await save(product);
                dispatch(addPruduct(response.data));
            } else {
                response = await update(product);
                dispatch(updatePruduct(response.data));
            }

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
                dispatch(loadingError(error.response.data));
            } else if (error.response && error.response.status == 500 && error.response.data?.message?.includes('constraint')) {
                dispatch(loadingError({ name: 'Ya existe un producto con el mismo nombre' }));
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
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await remove(id);
                    dispatch(removeProduct(id))
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
        dispatch(onProductSelectForm({ ... product}));
    }

    const handlerOpenForm = () => {
        dispatch(onOpenForm());
    }

    const handlerCloseForm = () => {
        dispatch(onCloseForm());
        dispatch(loadingError({}));
    }

    return {
        products,
        initialProductForm,
        productSelected,
        visibleForm,
        errors,
        isLoading,
        handlerAddProduct,
        handlerRemoveProduct,
        handlerProductSelectForm,
        handlerOpenForm,
        handlerCloseForm,
        getProducts
    }

}