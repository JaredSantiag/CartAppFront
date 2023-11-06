import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ProductContext } from "../context/ProductContext";

export const ProductRow = ({ id, name, price, description }) => {

    const { handlerProductSelectForm, handlerRemoveProduct } = useContext(ProductContext);

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handlerProductSelectForm({
                        id,
                        name,
                        price,
                        description
                    })}>
                    update
                </button>
            </td>
            <td>
                <NavLink
                    className={'btn btn-secondary btn-sm'}
                    to={'/products/edit/' + id}>
                    update route
                </NavLink>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handlerRemoveProduct(id)}>
                    remove
                </button>
            </td>
        </tr>
    )
}