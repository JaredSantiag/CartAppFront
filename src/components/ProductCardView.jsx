import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const ProductCardView = ({ id, name, description, price }) => {

    const { handlerAddProductCart }  = useContext(ProductContext);;

    const navigate = useNavigate();

    const onAddProduct = (product) => {
        console.log(product);
        handlerAddProductCart(product);
        navigate('/cart');
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">$ {price}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => onAddProduct({id, name, description, price })}
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </>
    )
}
