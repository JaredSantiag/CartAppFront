import { useDispatch, useSelector } from "react-redux";
import { find, updateAddress } from "../services/userService";
import { loadingUser, saveAddress, showPayments, hidePayments, openModalPassword, closeModalPassword, openModalAddress, closeModalAddress } from "../store/slices/user/userSllice";
import Swal from "sweetalert2";
import { useAuth } from "../auth/hooks/useAuth";

export const useUser = () => {

    const { user, isLoading, visiblePaymentMethods, visibleModalPassword, visibleModalAddress, address } = useSelector(state => state.user);

    const { handlerLogout } = useAuth();

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

    const handlerSaveAddress = async (address) => {
        try {
            address.postCode = address.postCode.toString()
            let response = await updateAddress(address);
            dispatch(saveAddress(response.data));

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Direccion actualizada",
                showConfirmButton: false,
                timer: 1500
            });

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

    const handlerCloseModalAddress = () => {
        dispatch(closeModalAddress());
    }

    return {
        user,
        isLoading,
        visiblePaymentMethods,
        visibleModalPassword,
        visibleModalAddress,
        address,
        getUser,
        handlerSaveAddress,
        handlerPayments,
        handlerOpenModalPassword,
        handlerCloseModalPassword,
        handlerOpenModalAddress,
        handlerCloseModalAddress
    }
}