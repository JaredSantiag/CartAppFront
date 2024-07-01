import { useUser } from "../hooks/useUser";

export const PasswordMoodal = () => {

    const { visibleModalPassword, handlerCloseModalPassword } = useUser();

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Change password
                            </h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmit}>
                                <input className="form-control my-3 w-75"
                                    type="password"
                                    placeholder="Current password"
                                    name="currentPassword"
                                />

                                <input className="form-control my-3 w-75"
                                    type="password"
                                    placeholder="New password"
                                    name="newPassword"
                                />

                                <input className="form-control my-3 w-75"
                                    type="password"
                                    placeholder="Confirm new password"
                                    name="confirmPassword"
                                />

                                <button
                                    className="btn btn-primary"
                                    type="submit">
                                    Change
                                </button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            {!visibleModalPassword || <button
                                className="btn btn-secondary mx-2" type="button" onClick={() => handlerCloseModalPassword()}>
                                Cancel
                            </button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}