import { Navigate, Route, Routes } from "react-router-dom"
import { CatalogView } from "../components/CatalogView"
import { CartView } from "../components/CartView"
import { CartAppPage } from "../pages/ProductsPages"
import { Navbar } from "../components/Navbar"
import { RegisterPage } from "../pages/RegisterPage"
import { useAuth } from "../auth/hooks/useAuth"
import { useSelector } from "react-redux"

export const CartRoutes = () => {

    const { isAdmin } = useSelector(state => state.auth);

    return (
        <>
            <Navbar />

            <div className="container my-4">
                <h3>Cart App</h3>

                <Routes>
                    <Route
                        path='catalog'
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
                        path='products'
                        element={<CartAppPage />} />


                    {
                        !isAdmin ||
                        <>
                            <Route
                                path="products/new"
                                element={<RegisterPage />} />

                            <Route
                                path="products/edit/:id"
                                element={<RegisterPage />} />

                        </>
                    }
                </Routes>
            </div>
        </>
    )
}