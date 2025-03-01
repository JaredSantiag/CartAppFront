import { useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import '../styles/login.css';

const initialLoginForm = {
    username: '',
    password: ''
}

export const LoginPage = () => {

    const { handlerLogin } = useAuth();
    const navigate = useNavigate();

    const [LoginForm, setLoginForm] = useState(initialLoginForm);
    const { username, password } = LoginForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...LoginForm,
            [name]: value
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            Swal.fire('Error de validación', 'Username y password requeridos', 'error');
        }

        // aqui ira el login
        handlerLogin({ username, password });


        setLoginForm(initialLoginForm);
    }

    const onRegisterUser = () => {
        navigate('/register');
    }

    return (<>
        <div className="row principal-login">
            <div className="col">
                
            </div>
            <div className="col column-login">
                <div className="modal modal-login" tabIndex="-1" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Login</h5>
                            </div>
                            <form onSubmit={onSubmit}>
                                <div className="modal-body">
                                    <input
                                        className="form-control my-3 w-75"
                                        placeholder="Username"
                                        name="username"
                                        value={username}
                                        onChange={onInputChange} />

                                    <input
                                        className="form-control my-3 w-75"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        onChange={onInputChange} />

                                </div>
                                <div className="modal-footer d-flex justify-content-between">
                                    <button type="submit" className="btn btn-primary justify-content-end">Login</button>

                                    <div>
                                        Don't have an account?
                                        <button type="button" className="btn btn-link" onClick={onRegisterUser}>Register here</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}