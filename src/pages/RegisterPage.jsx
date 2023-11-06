import { useContext, useEffect, useState } from "react"
import { ProductForm } from "../components/ProductForm"
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

export const RegisterPage = () => {

    const  {products = [], initialProductForm } = useContext(ProductContext)

    const [productSelected, setProductSelected] = useState(initialProductForm);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const product = products.find(p => p.id == id) || initialProductForm;
            setProductSelected(product);
        }
    }, [id])

    return (
        <div className="container my-4">
            <h4>{productSelected.id > 0 ? 'Editar' : 'Registrar'}</h4>
            <div className="row">
                <div className="col">
                    <ProductForm
                        productSelected={productSelected} />
                </div>
            </div>
        </div>
    )
}