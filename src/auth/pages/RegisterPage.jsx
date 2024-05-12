import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";

const initialLoginForm = {
    username: '',
    email: '',
    password: ''
}

export const RegisterPage = () => {
    const { haandlerRegister } = useAuth();
    const navigate = useNavigate();

    const [LoginForm, setLoginForm] = useState(initialLoginForm);
    const { username, email, password } = LoginForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...LoginForm,
            [name]: value
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || !email || !password) {
            Swal.fire('Error de validación', 'Username email y password requeridos', 'error');
        }

        haandlerRegister({ username, email, password });
    }

    const returnLogin = () => {
        navigate('/');
    }

    return (
        <form className="p-5" onSubmit={onSubmit}>
            <h3>Register</h3>

            <input className="form-control my-3 w-50"
                type="text"
                placeholder="username"
                name="username"
                onChange={onInputChange}
            />

            <input className="form-control my-3 w-50"
                type="email"
                placeholder="email"
                name="email"
                onChange={onInputChange}
            />

            <input className="form-control my-3 w-50"
                type="password"
                placeholder="password"
                name="password"
                onChange={onInputChange}
            />

            <div className="d-flex justify-content-between w-50">
                <button
                    className="btn btn-primary mx-2" type="button" onClick={() => returnLogin()}>
                    Return to login
                </button>

                <button
                    className="btn btn-primary"
                    type="submit">
                    Register
                </button>
            </div>
        </form>
    );
}