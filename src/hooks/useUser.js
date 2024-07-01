import { useDispatch, useSelector } from "react-redux";
import { find } from "../services/userService";
import { loadingUser, showPayments, hidePayments, openModalPassword, closeModalPassword, openModalAddress, closeModalAddress } from "../store/slices/user/userSllice";

export const useUser = () => {

    const { user, isLoading, visiblePaymentMethods, visibleModalPassword, visibleModalAddress } = useSelector(state => state.user);

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

    const handlerPayments = (paymentMethod) => {
        if (visiblePaymentMethods.includes(paymentMethod)) {
            dispatch(hidePayments(paymentMethod));
        } else {
            dispatch(showPayments(paymentMethod));
        }
    }

    const handlerOpenModalPassword = () => {
        dispatch(openModalPassword());
    }

    const handlerCloseModalPassword = () => {
        dispatch(closeModalPassword());
    }

    const handlerOpenModalAddress = (address) => {
        dispatch(openModalAddress( address ));
    }

    const handlerCloseModal = () => {
        dispatch(closeModalAddress());
    }

    return {
        user,
        isLoading,
        visiblePaymentMethods,
        visibleModalPassword,
        visibleModalAddress,
        getUser,
        handlerPayments,
        handlerOpenModalPassword,
        handlerCloseModalPassword,
        handlerOpenModalAddress,
        handlerCloseModal
    }
}