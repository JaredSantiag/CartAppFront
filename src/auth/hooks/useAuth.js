import Swal from "sweetalert2";
import { loginUser, registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout, onRegister, onInitLogin } from "../../store/slices/auth/authSlice";

export const useAuth = () => {

    const dispatch = useDispatch();
    const { user, isAdmin, isAuth } = useSelector(state => state.auth)
    // const [login, dispatch] = useReducer(loginReducer, initialLogin);

    const navigate = useNavigate();

    const handlerLogin = async ({ username, password }) => {

        try{
            dispatch(onInitLogin());
            const response = await loginUser({username, password});
            const token = response.data.token;
            const claims = JSON.parse(window.atob(token.split(".")[1]));
            console.log(claims);

            const user = {username: claims.sub}
            dispatch(onLogin({ user, isAdmin: claims.isAdmin }));

            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
                user
            }));

            sessionStorage.setItem('token', `Bearer ${token}`);

            navigate('/catalog');
        }
        catch(error) {
            dispatch(onLogout());
            if(error.response?.status == 401){
                Swal.fire('Error de Login', 'Username o password invalidos', 'error');
            } else if(error.response?.status == 403){
                Swal.fire('Error de Login', 'No tiene acceso al recurso o permisos!', 'error');
            } else {
                throw error;
            }
        }
    }

    const haandlerRegister = async ({ username, email, password }) => {
        try{
            const user = {username, email, password}
            dispatch(onRegister(user));
            const response = await registerUser({username, email, password});
            Swal.fire({
                title: "Registrado con exito!",
                text: "Ahora puedes iniciar sesión y realizar tus compras",
                icon: "success"
            });
            navigate('/');
        }
        catch(error) {
            dispatch(onRegister());
            Swal.fire('Error de registro', 'Vallida tu información, puede que algun campo ya haya sido registrado', 'error');
        }
    }

    const handlerLogout = () => {
        dispatch(onLogout());
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('login');
        sessionStorage.clear();
    }


    return {
        login: {
            user,
            isAdmin,
            isAuth
        },
        handlerLogin,
        haandlerRegister,
        handlerLogout
    }
}