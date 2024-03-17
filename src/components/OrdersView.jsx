import { useOrder } from "../hooks/useOrder"
import { Basket3Fill } from 'react-bootstrap-icons';

export const OrdersView = () => {

    const { orders } = useOrder();

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Número de orden</th>
                    <th>Fecha</th>
                    <th>Artículos</th>
                </tr>
            </thead>

            <tbody>
                {
                    orders.map(({ id, orderDate }) => (
                        <tr key={id}>
                            <td>
                                {id}
                            </td>
                            <td>
                                {orderDate}
                            </td>
                            <td>
                                <button type="button" className="btn btn-secondary btn-sm">
                                    <Basket3Fill className="me-2" />
                                    Listar
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}