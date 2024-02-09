import { NavLink } from "react-router-dom"
import { useProduct } from "../hooks/useProduct";
import { useAuth } from "../auth/hooks/useAuth";

export const ProductRow = ({ id, name, price, description }) => {

    const { handlerProductSelectForm, handlerRemoveProduct } = useProduct();
    const {login} = useAuth()

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>

            {
                !login.isAdmin ||
                <>
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
                </>
            }

        </tr>
    )
}