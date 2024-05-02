import { useOrder } from "../hooks/useOrder"
import { Basket3Fill } from 'react-bootstrap-icons';

export const OrdersView = () => {

    const { orders, handlerOpenModal } = useOrder();

    const getTotal = (items) => {
        let total = 0.0;
        items.map(i => {
            total += (i.price * i.quantity)
        })
        return total;
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Número de orden</th>
                    <th>Fecha de pedido</th>
                    <th>Artículos</th>
                    <th>Total</th>
                </tr>
            </thead>

            <tbody>
                {
                    orders.map(({ id, orderDate, items }) => (
                        <tr key={id}>
                            <td>
                                {id}
                            </td>
                            <td>
                                {orderDate}
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-secondary btn-sm"
                                    onClick={() => handlerOpenModal(items)}
                                >
                                    <Basket3Fill className="me-2" />
                                    Listar
                                </button>
                            </td>
                            <td>
                                ${getTotal(items)}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}