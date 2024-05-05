import { useOrder } from "../hooks/useOrder";

export const ItemsModal = () => {

    const { items, visibleModal, handlerCloseModal } = useOrder();

    return (
        <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{ display: "block" }} tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Articulos
                            </h5>
                        </div>
                        <div className="modal-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map(i => (
                                        <tr>
                                            <td key={i.id}>{i.product.name}</td>
                                            <td>{i.price}</td>
                                            <td>{i.quantity}</td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                            {!visibleModal || <button
                                className="btn btn-primary mx-2" type="button" onClick={() => handlerCloseModal()}>
                                Cerrar
                            </button>}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}