import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";

export const UserModal = () => {

    const { user, visibleModalUser, handlerSaveUser, handlerCloseModalUser } = useUser();

    const [userForm, setUserForm] = useState(user);

    useEffect(() => {
        setUserForm({
            ...user
        })
    }, [user])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        console.log("aquiiiiii"+userForm)
        event.preventDefault();
        
        handlerSaveUser(userForm);
        handlerCloseModalUser();
    }

    const { email, phoneNumber, username } = userForm;

    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Actualizar datos
                            </h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmit}>
                                <input className="form-control my-3 w-75"
                                    type="text"
                                    placeholder="Username"
                                    name="text"
                                    value={username}
                                    onChange={onInputChange}
                                />

                                <input className="form-control my-3 w-75"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={onInputChange}
                                />

                                <input className="form-control my-3 w-75"
                                    type="number"
                                    placeholder="Phone Number"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={onInputChange}
                                />

                                <input className="form-control my-3 w-75"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value=""
                                    onChange={onInputChange}
                                />

                                <button
                                    className="btn btn-primary"
                                    type="submit">
                                    Save changes
                                </button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            {!visibleModalUser || <button
                                className="btn btn-secondary mx-2" type="button" onClick={() => handlerCloseModalUser()}>
                                Cancel
                            </button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}