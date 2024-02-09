import { useEffect, useState } from "react";
import { useProduct } from "../hooks/useProduct";

export const ProductForm = ({ productSelected, handlerCloseForm }) => {

    const {initialProductForm, handlerAddProduct, errors} = useProduct();

    const [productForm, setProductForm] = useState(initialProductForm);

    const { id, name, description, price } = productForm;

    useEffect(() => {
        setProductForm({
            ...productSelected
        })
    }, [productSelected])

    const onInputChange = ({ target }) => {
        console.log(target.value);
        const { name, value } = target;
        setProductForm({
            ...productForm,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        /*
        if (!name || !description || !price) {
            Swal.fire({
                icon: 'error',
                title: 'Error de validación',
                text: 'Debe llenar los campos del formulario'
            })
            return;
        }
        console.log(productForm);
        */

        handlerAddProduct(productForm);
        //setProductForm(initialProductForm);
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setProductForm(initialProductForm);
    }

    return (
        <form onSubmit={onSubmit}>
            <input className="form-control my-3 w-75"
                placeholder="name"
                name="name"
                value={name}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.name}</p>    

            <input type="hidden" name="id" value={id} />

            <input className="form-control my-3 w-75"
                placeholder="description"
                name="description"
                value={description}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.description}</p>    

            <input className="form-control my-3 w-75"
                placeholder="price"
                type="number"
                name="price"
                value={price}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.price}</p>    

            <button
                className="btn btn-primary"
                type="submit">
                {id > 0 ? 'Edtiar' : 'Crear'}
            </button>

            {!handlerCloseForm || <button
                className="btn btn-primary mx-2" type="button" onClick={() => onCloseForm()}>
                Cerrar
            </button>}

        </form>
    );
}