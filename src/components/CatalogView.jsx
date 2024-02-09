import { ProductCardView } from "./ProductCardView";
import { useProduct } from "../hooks/useProduct";

export const CatalogView = () => {

    const { products }  = useProduct();

    return (
        <>
            <div className="row">

                {products.map(prod => (

                    <div className="col-4 my-2" key={prod.id}>  
                        <ProductCardView 
                            id ={prod.id}
                            name={prod.name} 
                            description={prod.description} 
                            price={prod.price}
                        />
                    </div>
                ))}

            </div>
        </>
    );
}