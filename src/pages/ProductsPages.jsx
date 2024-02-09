import { useEffect } from "react";
import { ProductModalForm } from "../components/ProductModalForm";
import { ProductsList } from "../components/ProductsList";
import { useProduct } from "../hooks/useProduct";
import { useAuth } from "../auth/hooks/useAuth";

export const ProductsPages = () => {

    const {
        products,
        visibleForm,
        handlerOpenForm,
        getProducts
    } = useProduct();

    const {login} = useAuth()

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
                        (visibleForm || !login.isAdmin) || <button className="btn btn-primary my-2" onClick={handlerOpenForm}>
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