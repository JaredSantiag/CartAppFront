import { useAuth } from "./auth/hooks/useAuth"
import { LoginPage } from "./auth/pages/LoginPage"
import { CartAppPage } from "./pages/CartAppPages"

export const CartApp = () => {

    const {login,handlerLogin,handlerLogout} = useAuth();
   
    return (
        <>
            {login.isAuth ? <CartAppPage login={login} handlerLogout={handlerLogout}/> : <LoginPage handlerLogin={handlerLogin}/>}
        </>)
}