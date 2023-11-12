import { useContext, useState } from "react";
import { ProductCardView } from "./ProductCardView";
import { ProductContext } from "../context/ProductContext";

export const CatalogView = () => {

    const { products }  = useContext(ProductContext);

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