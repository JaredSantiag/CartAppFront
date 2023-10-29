import { useItemsCart } from "./hooks/useItemCart"
import { useProduct } from "./hooks/useProduct"
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
    
    const { products, initialProductForm, handlerAddProduct, handlerRemoveProduct,} = useProduct();
    const { cartItems, handlerAddProductCart, handlerDeleteCart } = useItemsCart();

    return (<>
        <Navbar/>

        <div className="container my-4">
            <h3>Cart App</h3>
            <CartRoutes 
                products={products}
                cartItems={cartItems} 
                initialProductForm ={initialProductForm}
                handlerAddProduct={handlerAddProduct} 
                handlerRemoveProduct={handlerRemoveProduct}
                handlerAddProductCart={handlerAddProductCart} 
                handlerDeleteCart={handlerDeleteCart}/>
        </div>
    </>)
}