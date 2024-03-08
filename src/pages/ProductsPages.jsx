import { useEffect } from "react";
import { ProductModalForm } from "../components/ProductModalForm";
import { ProductsList } from "../components/ProductsList";
import { useProduct } from "../hooks/useProduct";
import { useAuth } from "../auth/hooks/useAuth";
import { useParams } from "react-router-dom";

export const ProductsPages = () => {

    const { page } = useParams() //Para obtener el parametro de la ruta

    const {
        products,
        visibleForm,
        isLoading,
        handlerOpenForm,
        getProducts
    } = useProduct();

    const { login } = useAuth()

    useEffect(() => {
        getProducts(page);
    }, [, page]);

    if (isLoading) {
        return (
            <div className="container my-4 text-center">
                <div className="spinner-border text-primary m-4" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

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
                            : <>
                                <ProductsList />
                                
                            </>
                    }
                </div>
            </div>
        </>
    )
}