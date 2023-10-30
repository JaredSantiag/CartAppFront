import { useItemsCart } from "./hooks/useItemCart"
import { useProduct } from "./hooks/useProduct"
import { Navbar } from "./components/Navbar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
    
    const { products, 
            initialProductForm, 
            productSelected, 
            handlerAddProduct, 
            handlerRemoveProduct, 
            handlerProductSelectForm
        } = useProduct();

    const { cartItems, 
            handlerAddProductCart, 
            handlerDeleteCart
        } = useItemsCart();

    return (<>
        <Navbar/>

        <div className="container my-4">
            <h3>Cart App</h3>
            <CartRoutes 
                products={products}
                cartItems={cartItems} 
                initialProductForm ={initialProductForm}
                productSelected={productSelected}
                handlerAddProduct={handlerAddProduct} 
                handlerRemoveProduct={handlerRemoveProduct}
                handlerProductSelectForm={handlerProductSelectForm}
                handlerAddProductCart={handlerAddProductCart} 
                handlerDeleteCart={handlerDeleteCart}/>
        </div>
    </>)
}