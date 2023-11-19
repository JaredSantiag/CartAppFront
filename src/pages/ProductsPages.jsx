import { useContext, useEffect } from "react";
import { ProductModalForm } from "../components/ProductModalForm";
import { ProductsList } from "../components/ProductsList";
import { ProductContext } from "../context/ProductContext";

export const CartAppPage = () => {

    const {
        products,
        visibleForm,
        handlerOpenForm,
        getProducts
    } = useContext(ProductContext);

    useEffect(() =>{
        getProducts();
    }, []);

    return (
        <>
            {!visibleForm ||
                <ProductModalForm />
            }

            <div className="row">
                <div className="col">
                    {
                        visibleForm || <button className="btn btn-primary my-2" onClick={handlerOpenForm}>
                            Nuevo producto
                        </button>
                    }

                    {
                        products.length === 0
                            ? <div className="alert alert-warning">No hay producctos en el sistema</div>
                            : <ProductsList />
                    }
                </div>
            </div>
        </>
    )
}