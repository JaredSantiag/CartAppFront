import { useDispatch, useSelector } from "react-redux";
import { find, createAddress, updateUser, updateAddress, removeAddress, removePaymentMethod, createPaymentMethod } from "../services/userService";
import {
    loadingUser,
    saveUser,
    saveAddress,
    savePaymentMethod,
    deleteAddress,
    deletePaymentMethod,
    showPayments,
    hidePayments,
    visibleModalUser,
    visibleModalAddress,
    visibleModalPayment,
    openModalUser,
    closeModalUser,
    openModalAddress,
    closeModalAddress,
    openModalPayment,
    closeModalPayment
} from "../store/slices/user/userSllice";
import Swal from "sweetalert2";
import { useAuth } from "../auth/hooks/useAuth";

export const useUser = () => {

    const { user, isLoading, visiblePaymentMethods, visibleModalUser, visibleModalAddress, visibleModalPayment, address } = useSelector(state => state.user);

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

    const handlerSaveUser = async (user) => {
        const response = await updateUser(user);
        dispatch(saveUser(response));
        Swal.fire(
            'Datos actualizados correctamente',
            'Sus datos se han actualizado correctamente ',
            'success'
        );
    }

    const handlerSaveAddress = async (address) => {
        try {
            if (address.id > 0) {
                await updateAddress(address);
            } else {
                await createAddress(address);
            }

            dispatch(saveAddress(address));

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

    const handlerSavePaymentMethod = async (paymentMethod) => {
        try {
            if (paymentMethod.id > 0) {
                await updateAddress(paymentMethod);
            } else {
                await createAddress(paymentMethod);
            }

            dispatch(savePaymentMethod(paymentMethod));

            Swal.fire(
                (paymentMethod.id === 0) ?
                    'Metodo de pago añadido' :
                    'Metodo de pago actualizado',
                (paymentMethod.id === 0) ?
                    'El metodo de pago ha sido creado correctamente' :
                    'El metodo de pago ha sido actualizado correctamente',
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

    const handlerOpenModalUser = (user) => {
        dispatch(openModalUser(user));
    }

    const handlerCloseModalUser = () => {
        dispatch(closeModalUser());
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

    const handlerOpenModalPayment = (paymentMethod) => {
        if (paymentMethod == null) {
            paymentMethod = {
                id: 0,
                cardNumber: '',
                monthExpiration: '',
                yearExpiration: '',
                securityCode: '',
            }
        }
        dispatch(openModalPayment(paymentMethod));
    }

    const handlerCloseModalPayment = () => {
        dispatch(closeModalPayment());
    }

    return {
        user,
        isLoading,
        visiblePaymentMethods,
        visibleModalUser,
        visibleModalAddress,
        visibleModalPayment,
        address,
        getUser,
        handlerSaveUser,
        handlerSaveAddress,
        handlerRemoveAddress,
        handlerSavePaymentMethod,
        handlerRemovePaymentMethod,
        handlerPayments,
        handlerOpenModalUser,
        handlerCloseModalUser,
        handlerOpenModalAddress,
        handlerCloseModalAddress,
        handlerOpenModalPayment,
        handlerCloseModalPayment
    }
}