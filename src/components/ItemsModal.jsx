import { useOrder } from "../hooks/useOrder";

export const ItemsModal = () => {

    const { handlerOpenModal } = useOrder();

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
                           Hola periplis
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}