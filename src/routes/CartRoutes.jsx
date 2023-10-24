import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CartView } from "../components/CartView"
import { ProductsList } from "../components/ProductsList"

export const CartRoutes = ({handlerAddProductCart, cartItems, handlerDeleteCart}) => {
    return (
        <Routes>
            <Route
                path='catalog'
                element={<CatalogView handler={handlerAddProductCart} />} />

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
                path='list'
                element={<ProductsList/>}
            />
        </Routes>
    )
}