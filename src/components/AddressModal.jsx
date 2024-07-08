import { useUser } from "../hooks/useUser";

export const AddressModal = () => {

    const { visibleModalAddress, address, handlerCloseModalAddress } = useUser();

    const onSubmit = (event) => {
        event.preventDefault();
    }

    const { street } = address;
    
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
                        <div className="modal-body">
                            <form onSubmit={onSubmit}>
                                <input className="form-control my-3 w-75"
                                    type="text"
                                    placeholder="Street"
                                    name="street"
                                    value={street}
                                />
                            </form>
                        </div>
                        <div className="modal-footer">
                            {!visibleModalAddress || <button
                                className="btn btn-secondary mx-2" type="button" onClick={() => handlerCloseModalAddress()}>
                                Cancel
                            </button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}