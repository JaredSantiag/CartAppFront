import { useState } from "react"
import { ProductForm } from "../components/ProductForm"

export const RegisterPage = ({ handlerAddProduct, initialProductForm }) => {

    const  [productSelected, setProductSelected] = useState(initialProductForm);

    return (
        <div className="container my-4">
            <h4>Registro de productos</h4>
            <div className="row">
                <div className="col">
                    <ProductForm
                        initialProductForm={initialProductForm} 
                        handlerAddProduct={handlerAddProduct} 
                        productSelected={productSelected}/>
                </div>
            </div>
        </div>
    )
}