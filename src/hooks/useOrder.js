import { useDispatch } from "react-redux"

export const useOrder = () => {

    const dispatch = useDispatch();

    const getOrders = async () => {
        try {
            const result = await getOrders();
            dispatch(loadingProducts(result.data));
        } catch (error) {
            if (error.response?.status == 401) {
                handlerLogout();
            }
        }
    }

    return {
        getOrders
    }
}