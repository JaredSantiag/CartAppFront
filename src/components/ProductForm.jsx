import { useState } from "react";

const initialProductForm = {
    name:'',
    description:'',
    price:0
}

export const ProductForm = ({handlerAddProduct}) => {

    const [productForm, setProductForm] = useState(initialProductForm);

    const {name, description, price} = productForm

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
            alert('Debe completar los campos del formulario');
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
            Agregar
        </button>
        </form>
    );
}