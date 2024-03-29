import { useDispatch, useSelector } from "react-redux";
import { loadingOrders, addOrder } from "../store/slices/orders/ordersSlice";
import { findAll, save } from "../services/orderService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/hooks/useAuth";

export const useOrder = () => {

    const { orders, isLoading } = useSelector(state => state.orders);

    const { handlerLogout } = useAuth();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const getOrders = async () => {
        try {
            const result = await findAll();
            dispatch(loadingOrders(result.data));
        } catch (error) {
            if (error.response?.status == 401) {
                handlerLogout();
            }
        }
    }

    const handlerAddOrder = async (cartItems) => {
        try {
            let response;
            let products = [];

            cartItems.map(item => {
                products.push({
                    'id': item.product.id
                })
            });

            response = await save(products);
            dispatch(addOrder(response.data));

            Swal.fire(
                'Orden procesada',
                'Sus productos seran enviados dependiendo de la disponibilidad',
                'success'
            );

            sessionStorage.removeItem('cart');
            navigate('orders');

        } catch (error) {
            if (error.response && error.response.status == 400) {
                Swal.fire(
                    'Ocurrio un problema', 
                    error.response.data, 
                    'error');
            } else if (error.response?.status == 401) {
                handlerLogout();
            }
            else {
                throw error;
            }
        }
    }

    return {
        orders,
        isLoading,
        getOrders,
        handlerAddOrder
    }
}