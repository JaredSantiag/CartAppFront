import { getProducts } from "../services/productService";
import { ProductRow } from "./ProductRow";

export const ProductsList = () => {

    const products = getProducts();

    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>price</th>
                    <th>update</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(({id, name, price}) => (
                        <ProductRow 
                        key={id} 
                        id={id} 
                        name={name} 
                        price={price} />
                    ))
                }
            </tbody>
        </table>
    )
}