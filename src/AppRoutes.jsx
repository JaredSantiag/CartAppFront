import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./auth/pages/LoginPage"
import { CartRoutes } from "./routes/CartRoutes";
import { useSelector } from "react-redux";
import { RegisterPage } from "./auth/pages/RegisterPage";

export const AppRoutes = () => {

    const { isAuth, isLoginLoading } = useSelector(state => state.auth);

    if (isLoginLoading) {
        return (
            <div className="container my-4 text-center">
                <div className="spinner-border text-primary m-4" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <Routes>
            {
                isAuth
                    ? (
                        <Route path='/*' element={<CartRoutes />} />
                    )
                    : <>
                        <Route path='/login'
                            element={<LoginPage />} />

                        <Route path='/register' element={<RegisterPage />} />

                        <Route path='/*' element={<Navigate to="/login" />} />
                    </>
            }
        </Routes>
    )
}