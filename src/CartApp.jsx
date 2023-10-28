import { useItemsCart } from "./hooks/useItemCart"
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
    
    const  { products, cartItems, handlerAddProduct, handlerAddProductCart, handlerDeleteCart } = useItemsCart();

    console.log(products);
    return (<>
        <Navbar/>

        <div className="container my-4">
            <h3>Cart App</h3>
            <CartRoutes 
                products={products}
                cartItems={cartItems} 
                handlerAddProduct={handlerAddProduct} 
                handlerAddProductCart={handlerAddProductCart} 
                handlerDeleteCart={handlerDeleteCart}/>
        </div>
    </>)
}