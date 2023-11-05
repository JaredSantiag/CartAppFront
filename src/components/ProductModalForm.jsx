import { ProductForm } from "./ProductForm"

export const ProductModalForm = ({ initialProductForm, productSelected, handlerAddProduct, handlerCloseForm }) => {
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
                            <ProductForm initialProductForm={initialProductForm} handlerAddProduct={handlerAddProduct} productSelected={productSelected} handlerCloseForm={handlerCloseForm} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}