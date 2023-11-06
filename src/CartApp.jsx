import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./auth/pages/LoginPage"
import { CartRoutes } from "./routes/CartRoutes";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext";

export const CartApp = () => {

    const { login } = useContext(AuthContext);

    return (
        <Routes>
            {
                login.isAuth
                    ? (
                        <Route path='/*' element={<CartRoutes />} />
                    )
                    : <>
                        <Route path='/login'
                            element={<LoginPage />} />

                        <Route path='/*' element={<Navigate to="/login" />} />
                    </>
            }
        </Routes>
    )
}