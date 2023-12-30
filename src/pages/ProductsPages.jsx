import { useContext, useEffect } from "react";
import { ProductModalForm } from "../components/ProductModalForm";
import { ProductsList } from "../components/ProductsList";
import { ProductContext } from "../context/ProductContext";
import { AuthContext } from "../auth/context/AuthContext";

export const CartAppPage = () => {

    const {
        products,
        visibleForm,
        handlerOpenForm,
        getProducts
    } = useContext(ProductContext);

    const {login} = useContext(AuthContext)

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