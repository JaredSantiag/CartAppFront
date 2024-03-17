import { useDispatch, useSelector } from "react-redux";
import { loadingOrders } from "../store/slices/orders/ordersSlice";
import { findAll } from "../services/orderService";

export const useOrder = () => {

    const {orders, isLoading} = useSelector(state => state.orders);

    const dispatch = useDispatch();

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

    return {
        orders,
        isLoading,
        getOrders
    }
}