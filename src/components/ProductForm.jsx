import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const ProductForm = ({handlerAddProduct, initialProductForm, productSelected}) => {

    const [productForm, setProductForm] = useState(initialProductForm);

    const {id, name, description, price} = productForm;

    useEffect(() => {
        setProductForm({
            ...productSelected
        })
    }, [productSelected])

    const onInputChange = ({target}) => {
        console.log(target.value);
        const {name, value} = target;
        setProductForm({
            ...productForm,
            [name]:value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        if(!name || !description || !price){
            Swal.fire({
                icon: 'error',
                title: 'Error de validación',
                text: 'Debe llenar los campos del formulario'
            })
            return;
        }

        //console.log(productForm);

        handlerAddProduct(productForm);
        setProductForm(initialProductForm);
    }

    return (
        <form onSubmit={onSubmit}>
            <input className="form-control my-3 w-75"
            placeholder="name"
            name="name"
            value={name}
            onChange={onInputChange}/>

        <input type="hidden" name="id" value={id}/>

        <input className="form-control my-3 w-75"
            placeholder="description"
            name="description"
            value={description}
            onChange={onInputChange}/>

        <input className="form-control my-3 w-75"
            placeholder="price"
            type="number"
            name="price"
            value={price}
            onChange={onInputChange}/>

        <button
            className="btn btn-primary"
            type="submit">
            {id>0 ? 'Edtiar' : 'Crear'}
        </button>
        </form>
    );
}