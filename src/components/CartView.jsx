import { useContext, useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { Wallet2, X } from 'react-bootstrap-icons';
import { useOrder } from "../hooks/useOrder";

export const CartView = () => {

    const { cartItems, handlerDeleteCart }  = useContext(ProductContext);
    const {handlerAddOrder} = useOrder();

    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTotal(calculateTotal(cartItems));
    },[cartItems])

    const onDeleteProduct = (id) => {
        handlerDeleteCart(id)
    }

    const onCatalog = () => {
        navigate('/catalog');
    }

    const onSubmit = () => {
        handlerAddOrder(cartItems);
    }

    return (
        <>
            <h3>Carro de compras</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.product.price}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onDeleteProduct(item.product.id)}>
                                        <X className="me-2"/>
                                        eliminar
                                    </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">${total}</td>
                    </tr>
                </tfoot>
            </table>


            <div className="row justify-content-between">
                <div className="col">
                    <button
                        className="btn btn-success"
                        onClick={onCatalog}>
                        Seguir comprando
                    </button>

                </div>

                <div className="col text-end me-4">
                    <button 
                    className="btn btn-success"
                        onClick={onSubmit} >
                            <Wallet2 className="me-2"/>
                        Comprar
                    </button>
                </div>
            </div>

        </>
    )
}
