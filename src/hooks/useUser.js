import { useDispatch, useSelector } from "react-redux";
import { find } from "../services/userService";
import { loadingUser, showPayments, hidePayments } from "../store/slices/user/userSllice";

export const useUser = () => {

    const { user, isLoading, visiblePaymentMethods } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const getUser = async () => {
        try {
            const result = await find();
            dispatch(loadingUser(result.data));
        } catch (error) {
            if (error.response?.status == 401) {
                handlerLogout();
            }
        }
    }

    const handlerPayments = () => {
        if (!visiblePaymentMethods) {
            dispatch(showPayments());
        } else {
            dispatch(hidePayments());
        }
    }

    return {
        user,
        isLoading,
        visiblePaymentMethods,
        getUser,
        handlerPayments,
    }
}