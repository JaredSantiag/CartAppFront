import { useContext, useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useProduct } from "../hooks/useProduct";

export const CartView = () => {

    const { cartItems, handlerDeleteCart }  = useProduct();

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
                                onClick={() => onDeleteProduct(item.product.id)}>eliminar</button>
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

            <button 
            className="btn btn-success"
            onClick={onCatalog}>
                Seguir comprando
            </button>
        </>
    )
}
