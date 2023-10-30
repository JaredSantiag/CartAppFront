import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CartView } from "../components/CartView"
import { ProductsList } from "../components/ProductsList"
import { ProductForm } from "../components/ProductForm"

export const CartRoutes = ({products, initialProductForm, productSelected, handlerAddProduct, handlerRemoveProduct, handlerProductSelectForm, handlerAddProductCart, cartItems, handlerDeleteCart}) => {
    return (
        <Routes>
            <Route
                path='catalog'
                element={(
                    products.length===0
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
                    <div className="row">
                        <div className="col">
                            <ProductForm initialProductForm={initialProductForm} handlerAddProduct={handlerAddProduct} productSelected={productSelected}/>
                        </div>
                        <div className="col">
                            {products.length===0
                            ? <div className="alert alert-warning">No hay producctos en el sistema</div>
                            : <ProductsList products={products} handlerRemoveProduct={handlerRemoveProduct} handlerProductSelectForm={handlerProductSelectForm}/>}
                        </div>
                    </div>
                )}/>
        </Routes>
    )
}