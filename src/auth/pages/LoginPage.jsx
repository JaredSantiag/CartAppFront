import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const initialLoginForm = {
    username: '',
    password: ''
}

export const LoginPage = () => {

    const {handlerLogin} =useContext(AuthContext);

    const [LoginForm, setLoginForm] = useState(initialLoginForm);
    const { username, password } = LoginForm;

    const onInputChange = ({target}) => {
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
        handlerLogin({username, password});
        

        setLoginForm(initialLoginForm);
    }

    return (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login page</h5>
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
                        <div className="modal-footer">

                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}