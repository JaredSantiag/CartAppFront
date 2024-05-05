import { useDispatch, useSelector } from "react-redux";
import { loadingOrders, addOrder, onOpenModal, onCloseModal} from "../store/slices/orders/ordersSlice";
import { findAll, save } from "../services/orderService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/hooks/useAuth";

export const useOrder = () => {

    const { orders, isLoading, items, visibleModal } = useSelector(state => state.orders);

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
            let items = [];

            cartItems.map(item => {
                items.push({
                    product: { 
                        'id': item.product.id
                    },
                    price: item.product.price,
                    quantity: item.quantity
                })
            });

            response = await save(items);
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

    const handlerOpenModal = (items) => {
        dispatch(onOpenModal( items));
    }

    const handlerCloseModal = () => {
        dispatch(onCloseModal());
    }

    return {
        orders,
        isLoading,
        visibleModal,
        items,
        getOrders,
        handlerAddOrder,
        handlerOpenModal,
        handlerCloseModal
    }
}