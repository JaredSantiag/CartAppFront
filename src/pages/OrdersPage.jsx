import { useEffect } from "react";
import { useOrder } from "../hooks/useOrder"
import { EmojiFrown } from 'react-bootstrap-icons';
import { OrdersView } from "../components/OrdersView";


export const OrdersPage = () => {

    const { orders, isLoading, getOrders } = useOrder();

    useEffect(() => {
        getOrders();
    }, []);

    if (isLoading) {
        return (
            <div className="container my-4 text-center">
                <div className="spinner-border text-primary m-4" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <>
            {
                orders.length === 0
                    ? <div className="alert alert-warning">
                        <EmojiFrown className="me-2" />
                        No has realizado ninguna compra
                    </div>
                    : <>
                        <OrdersView />
                    </>
            }
        </>
    )
}