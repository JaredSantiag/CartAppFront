import { ProductForm } from "./ProductForm"
import { useProduct } from "../hooks/useProduct";

export const ProductModalForm = () => {

    const { productSelected, handlerCloseForm } = useProduct();

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