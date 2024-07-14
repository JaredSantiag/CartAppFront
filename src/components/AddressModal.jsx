import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";

export const AddressModal = () => {

    const { visibleModalAddress, address, handlerSaveAddress, handlerCloseModalAddress } = useUser();

    const [addressForm, setAddressForm] = useState(address);

    useEffect(() => {
        setAddressForm({
            ...address
        })
    }, [address])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setAddressForm({
            ...addressForm,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        handlerSaveAddress(addressForm);
        handlerCloseModalAddress();
    }

    const { id, street, number, suburb, postCode, city, state, country } = addressForm;

    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Edit address
                            </h5>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="modal-body">
                                <input type="hidden" name="id" value={id} />

                                <input className="form-control my-3 w-75"
                                    type="text"
                                    placeholder="Street"
                                    name="street"
                                    value={street}
                                    onChange={onInputChange}
                                />

                                <input className="form-control my-3 w-75"
                                    type="text"
                                    placeholder="Number"
                                    name="number"
                                    value={number}
                                    onChange={onInputChange}
                                />

                                <input className="form-control my-3 w-75"
                                    type="text"
                                    placeholder="Suburb"
                                    name="suburb"
                                    value={suburb}
                                    onChange={onInputChange}
                                />

                                <input className="form-control my-3 w-75"
                                    type="text"
                                    placeholder="Post Code"
                                    name="postCode"
                                    value={postCode}
                                    onChange={onInputChange}
                                />

                                <input className="form-control my-3 w-75"
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    value={city}
                                    onChange={onInputChange}
                                />

                                <input className="form-control my-3 w-75"
                                    type="text"
                                    placeholder="State"
                                    name="state"
                                    value={state}
                                    onChange={onInputChange}
                                />

                                <input className="form-control my-3 w-75"
                                    type="text"
                                    placeholder="Country"
                                    name="country"
                                    value={country}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="btn btn-primary"
                                    type="submit">
                                    Guardar
                                </button>

                                {!visibleModalAddress || <button
                                    className="btn btn-secondary mx-2" type="button" onClick={() => handlerCloseModalAddress()}>
                                    Cancel
                                </button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}