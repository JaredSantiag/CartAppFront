import { useReducer } from "react"
import { LoginPage } from "./auth/pages/LoginPage"
import { CartAppPage } from "./pages/CartAppPages"
import { loginReducer } from "./auth/pages/reducers/loginReducer"
import Swal from "sweetalert2"

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined
}

export const CartApp = () => {

    const [login, dispach] = useReducer(loginReducer, initialLogin);

    const handlerLogin = ({ username, password }) => {
        if (username == 'admin' && password == '1234') {
            const user = {
                username: 'admin'
            }
            dispach({
                type: 'login',
                payload: user
            });

            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user
            }));
        }
        else {
            Swal.fire('Error de Login', 'Username o password invalidos', 'error');
        }
    }

    return (
        <>
            {login.isAuth ? <CartAppPage /> : <LoginPage handlerLogin={handlerLogin}/>}
        </>)
}