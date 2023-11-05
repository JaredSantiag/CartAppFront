import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CartView } from "../components/CartView"
import { useItemsCart } from "../hooks/useItemCart"
import { CartAppPage } from "../pages/ProductsPages"
import { Navbar } from "../components/Navbar"
import { useProduct } from "../hooks/useProduct";
import { RegisterPage } from "../pages/RegisterPage"

export const CartRoutes = ({ login, handlerLogout }) => {

    const { cartItems,
        handlerAddProductCart,
        handlerDeleteCart
    } = useItemsCart();

    const {
        products,
        initialProductForm,
        productSelected,
        visibleForm,
        handlerAddProduct,
        handlerRemoveProduct,
        handlerProductSelectForm,
        handlerOpenForm,
        handlerCloseForm
    } = useProduct();

    console.log(initialProductForm)

    return (
        <>
            <Navbar login={login} handlerLogout={handlerLogout} />

            <div className="container my-4">
                <h3>Cart App</h3>

                <Routes>
                    <Route
                        path='catalog'
                        element={(
                            products.length === 0
                                ? <div className="alert alert-warning">No hay producctos en el sistema</div>
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
                        path='products'
                        element={<CartAppPage
                            products={products}
                            initialProductForm={initialProductForm}
                            productSelected={productSelected}
                            visibleForm={visibleForm}
                            handlerAddProduct={handlerAddProduct}
                            handlerRemoveProduct={handlerRemoveProduct}
                            handlerProductSelectForm={handlerProductSelectForm}
                            handlerOpenForm={handlerOpenForm}
                            handlerCloseForm={handlerCloseForm} />} />

                    <Route
                        path="products/new"
                        element={<RegisterPage
                            handlerAddProduct={handlerAddProduct}
                            initialProductForm={initialProductForm} />} />
                </Routes>
            </div>
        </>
    )
}