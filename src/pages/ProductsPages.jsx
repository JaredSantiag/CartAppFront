import { ProductModalForm } from "../components/ProductModalForm";
import { ProductsList } from "../components/ProductsList";

export const CartAppPage = ({
    products,
    initialProductForm,
    productSelected,
    visibleForm,
    handlerAddProduct, 
    handlerRemoveProduct, 
    handlerProductSelectForm, 
    handlerOpenForm, 
    handlerCloseForm 
}) => {

    return (
        <>
            {!visibleForm ||
                <ProductModalForm initialProductForm={initialProductForm} productSelected={productSelected} handlerAddProduct={handlerAddProduct} handlerCloseForm={handlerCloseForm} />
            }

            <div className="row">
                <div className="col">
                    {
                        visibleForm || <button className="btn btn-primary my-2" onClick={handlerOpenForm}>
                            Nuevo producto
                        </button>
                    }

                    {
                        products.length === 0
                            ? <div className="alert alert-warning">No hay producctos en el sistema</div>
                            : <ProductsList products={products} handlerRemoveProduct={handlerRemoveProduct} handlerProductSelectForm={handlerProductSelectForm} />
                    }
                </div>
            </div>
        </>
    )
}