import { useContext } from "react"
import { ProductForm } from "./ProductForm"
import { ProductContext } from "../context/ProductContext";

export const ProductModalForm = () => {

    const { productSelected, handlerCloseForm } = useContext(ProductContext);

    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {productSelected.id > 0 ? 'Editar' : 'Crear'} Modal Productos
                            </h5>
                        </div>
                        <div className="modal-body">
                            <ProductForm 
                                productSelected={productSelected} 
                                handlerCloseForm={handlerCloseForm} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}