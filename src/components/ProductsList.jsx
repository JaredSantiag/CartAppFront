import { useContext } from "react";
import { ProductRow } from "./ProductRow";
import { ProductContext } from "../context/ProductContext";

export const ProductsList = () => {

    const {products} = useContext(ProductContext);

    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>price</th>
                    <th>update</th>
                    <th>update route</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(({id, name, price, description}) => (
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