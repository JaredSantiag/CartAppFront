import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({ products, handler }) => {

    return (
        <>
            <div className="row">

                {products.map(prod => (

                    <div className="col-4 my-2" key={prod.id}>  
                        <ProductCardView 
                            handler={handler}
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