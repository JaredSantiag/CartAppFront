import { ProductCardView } from "./ProductCardView";
import { useProduct } from "../hooks/useProduct";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Paginator } from "./Paginator";

export const CatalogView = () => {

    const { page } = useParams();

    const { products, paginator, getProducts } = useProduct();

    useEffect(() => {
        getProducts(page);
    }, [, page]);

    return (
        <>
            <div className="row">

                {products.map(prod => (

                    <div className="col-4 my-2" key={prod.id}>
                        <ProductCardView
                            id={prod.id}
                            name={prod.name}
                            description={prod.description}
                            price={prod.price}
                        />
                    </div>
                ))}

                <Paginator url="/catalog/page" paginator={paginator}/>
            </div>
        </>
    );
}