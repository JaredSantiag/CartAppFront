import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";

export const PaymentMethodModal = () => {

    const { visibleModalPayment, handlerCloseModalPayment } = useUser();

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
        event.preventDefault();
    }

    const { email, password, phoneNumber, username } = userForm;

    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Agregar metodo de pago
                            </h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmit}>
                                

                                <button
                                    className="btn btn-primary"
                                    type="submit">
                                    Save changes
                                </button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            {!visibleModalPayment || <button
                                className="btn btn-secondary mx-2" type="button" onClick={() => handlerCloseModalPayment()}>
                                Cancel
                            </button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}