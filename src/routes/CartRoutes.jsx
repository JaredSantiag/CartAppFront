import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CartView } from "../components/CartView"
import { ProductsPages } from "../pages/ProductsPages"
import { Navbar } from "../components/Navbar"
import { RegisterPage } from "../pages/RegisterPage"
import { ProductProvider } from "../context/ProductProvider"
import { useSelector } from "react-redux"
import { OrdersPage } from "../pages/OrdersPage"
import { Profile } from "../pages/Profile";

export const CartRoutes = () => {

    const { isAdmin } = useSelector(state => state.auth);

    return (
        <>
            <ProductProvider>
                <Navbar />

                <div className="container my-4">
                    <h3>Cart App</h3>

                    <Routes>
                        <Route
                            path='catalog'
                            element={<CatalogView />} />

                        <Route
                            path='catalog/page/:page'
                            element={<CatalogView />} />

                        <Route
                            path='cart'
                            element={(
                                <div className="my-4 w-50">
                                    <CartView />
                                </div>
                            )} />

                        <Route
                            path='/'
                            element={<Navigate to={'/catalog'} />} />

                        <Route
                            path='orders'
                            element={(
                                <OrdersPage />
                            )} />

                        <Route
                            path='profile'
                            element={(
                                <Profile />
                            )} />

                        {
                            !isAdmin ||
                            <>
                                <Route
                                    path="new"
                                    element={<RegisterPage />} />

                                <Route
                                    path="products/edit/:id"
                                    element={<RegisterPage />} />

                                <Route
                                    path='products'
                                    element={<ProductsPages />} />

                                <Route
                                    path='products/page/:page'
                                    element={<ProductsPages />} />
                            </>
                        }
                    </Routes>
                </div>
            </ProductProvider>
        </>
    )
}