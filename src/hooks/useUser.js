import { useDispatch, useSelector } from "react-redux";
import { find, createAddress, updateAddress, removeAddress, removePaymentMethod } from "../services/userService";
import {
    loadingUser,
    saveAddress,
    deleteAddress,
    deletePaymentMethod,
    showPayments,
    hidePayments,
    openModalPassword,
    closeModalPassword,
    openModalAddress,
    closeModalAddress,

} from "../store/slices/user/userSllice";
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
        let response;
        try {
            if (address.id > 0) {
                response = await updateAddress(address);
            } else {
                response = await createAddress(address);
            }

            dispatch(saveAddress(response.data));

            Swal.fire(
                (address.id === 0) ?
                    'Dirección creado' :
                    'Dirección actualizado',
                (address.id === 0) ?
                    'La dirección ha sido creado correctamente' :
                    'La dirección ha sido actualizado correctamente',
                'success'
            );

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

    const handlerRemoveAddress = (id) => {
        Swal.fire({
            title: '¿Esta seguro que desea eliminar?',
            text: "Cuidado, su dirección sera eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await removeAddress(id);
                    dispatch(deleteAddress(id))
                    Swal.fire(
                        'Dirección eliminado',
                        'Dirección eliminado correctamente',
                        'success'
                    )
                } catch (error) {
                    if (error.response?.status == 401) {
                        handlerLogout();
                    }
                }
            }
        })
    }

    const handlerRemovePaymentMethod = (id) => {
        Swal.fire({
            title: '¿Esta seguro que desea eliminar?',
            text: "Cuidado, su metodo de pago sera eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await removePaymentMethod(id);
                    dispatch(deletePaymentMethod(id))
                    Swal.fire(
                        'Metodo de pago eliminado',
                        'Metodod de pago eliminado correctamente',
                        'success'
                    )
                } catch (error) {
                    if (error.response?.status == 401) {
                        handlerLogout();
                    }
                }
            }
        })
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
        if (address == null) {
            address = {
                id: 0,
                street: '',
                number: '',
                suburb: '',
                postCode: '',
                city: '',
                state: '',
                country: ''
            }
        }
        dispatch(openModalAddress(address));
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
        handlerRemoveAddress,
        handlerRemovePaymentMethod,
        handlerPayments,
        handlerOpenModalPassword,
        handlerCloseModalPassword,
        handlerOpenModalAddress,
        handlerCloseModalAddress
    }
}