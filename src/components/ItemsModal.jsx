import { useOrder } from "../hooks/useOrder";

export const ItemsModal = () => {

    const { items, handlerCloseModal } = useOrder();

    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Items
                            </h5>
                        </div>
                        <div className="modal-body">
                            <table className="table table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>name</th>
                                        <th>price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        console.log(items)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}