import { ProductRow } from "./ProductRow";
import { useProduct } from "../hooks/useProduct";
import { useAuth } from "../auth/hooks/useAuth";

export const ProductsList = () => {

    const { products } = useProduct();
    const {login} = useAuth()

    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>price</th>
                    {!login.isAdmin ||
                        <>
                            <th>update</th>
                            <th>update route</th>
                            <th>remove</th>
                        </>
                    }
                </tr>
            </thead>
            <tbody>
                {
                    products.map(({ id, name, price, description }) => (
                        <ProductRow
                            key={id}
                            id={id}
                            name={name}
                            description={description}
                            price={price} />
                    ))
                }
            </tbody>
        </table>
    )
}