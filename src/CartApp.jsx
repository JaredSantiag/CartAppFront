import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./auth/hooks/useAuth"
import { LoginPage } from "./auth/pages/LoginPage"
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {

    const { login, handlerLogin, handlerLogout } = useAuth();

    return (
        <Routes>
            {
                login.isAuth
                    ? (
                        <Route path='/*' element={<CartRoutes
                            login={login}
                            handlerLogout={handlerLogout} />} />
                    )
                    : <>
                        <Route path='/login'
                            element={<LoginPage
                            handlerLogin={handlerLogin} />} />

                        <Route path='/*' element={<Navigate to="/login" />} />
                    </>
            }
        </Routes>
    )
}