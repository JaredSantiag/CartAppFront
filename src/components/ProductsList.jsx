import { ProductRow } from "./ProductRow";

export const ProductsList = ({products, handlerRemoveProduct, handlerProductSelectForm}) => {

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
                    products.map(({id, name, price, description}) => (
                        <ProductRow 
                        key={id} 
                        id={id} 
                        name={name} 
                        description={description}
                        price={price} 
                        handlerRemoveProduct={handlerRemoveProduct}
                        handlerProductSelectForm={handlerProductSelectForm}/>
                    ))
                }
            </tbody>
        </table>
    )
}