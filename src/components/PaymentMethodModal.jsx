import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";

export const PaymentMethodModal = () => {

    const { visibleModalPayment, paymentMethod, handlerSavePaymentMethod, handlerCloseModalPayment } = useUser();

    const [paymentForm, setPaymentForm] = useState(paymentMethod);

    useEffect(() => {
        setPaymentForm({
            ...paymentMethod
        })
    }, [paymentMethod])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setPaymentForm({
            ...paymentForm,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        handlerSavePaymentMethod(paymentForm);
        handlerCloseModalPayment();
    }

    const { id, cardNumber, monthExpiration, yearExpiration, securityCode } = paymentForm;

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
                                <input type="hidden" name="id" value={id} />

                                <input className="form-control my-3 w-75"
                                    type="password"
                                    placeholder="Card Number"
                                    name="cardNumber"
                                    value={cardNumber}
                                    onChange={onInputChange}
                                />

                                <input className="form-control my-3 w-75"
                                    type="password"
                                    placeholder="Month Of Expiration"
                                    name="monthExpiration"
                                    value={monthExpiration}
                                    onChange={onInputChange}
                                />

                                <input className="form-control my-3 w-75"
                                    type="password"
                                    placeholder="Year Of Expiration"
                                    name="yearExpiration"
                                    value={yearExpiration}
                                    onChange={onInputChange}
                                />

                                <input className="form-control my-3 w-75"
                                    type="password"
                                    placeholder="Security Code"
                                    name="securityCode"
                                    value={securityCode}
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