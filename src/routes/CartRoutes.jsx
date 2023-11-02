import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CartView } from "../components/CartView"
import { ProductsList } from "../components/ProductsList"
import { ProductModalForm } from "../components/ProductModalForm"

export const CartRoutes = ({ products, initialProductForm, productSelected, visibleForm, handlerAddProduct, handlerRemoveProduct, handlerProductSelectForm, handlerAddProductCart, cartItems, handlerDeleteCart, handlerOpenForm, handlerCloseForm }) => {
    return (
        <Routes>
            <Route
                path='catalog'
                element={(
                    products.length === 0
                        ? <div className="alert alert-warning">No hay producctos en el sisteema</div>
                        : <CatalogView products={products} handler={handlerAddProductCart} />
                )} />

            <Route
                path='cart'
                element={(
                    cartItems?.length <= 0 ?
                        <div className="alert alert-warning">No hay productos en el carrito de compras</div> :
                        (
                            <div className="my-4 w-50">
                                <CartView items={cartItems} handlerDelete={handlerDeleteCart} />
                            </div>
                        )
                )} />

            <Route
                path='/'
                element={<Navigate to={'/catalog'} />} />

            <Route
                path='admin'
                element={(
                    <>
                        {!visibleForm ||
                            <ProductModalForm initialProductForm={initialProductForm} productSelected={productSelected} handlerAddProduct={handlerAddProduct} handlerCloseForm={handlerCloseForm}/>
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
                )} />
        </Routes>
    )
}