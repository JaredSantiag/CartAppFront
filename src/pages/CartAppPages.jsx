import { useItemsCart } from "../hooks/useItemCart"
import { useProduct } from "../hooks/useProduct"
import { Navbar } from "../components/Navbar";
import { CartRoutes } from "../routes/CartRoutes";

export const CartAppPage = ({login, handlerLogout}) => {
    
    const { products, 
            initialProductForm, 
            productSelected, 
            visibleForm,
            handlerAddProduct, 
            handlerRemoveProduct, 
            handlerProductSelectForm,
            handlerOpenForm,
            handlerCloseForm
        } = useProduct();

    const { cartItems, 
            handlerAddProductCart, 
            handlerDeleteCart
        } = useItemsCart();

    return (<>
        <Navbar login={login} handlerLogout={handlerLogout}/>

        <div className="container my-4">
            <h3>Cart App</h3>
            <CartRoutes 
                products={products}
                cartItems={cartItems} 
                initialProductForm ={initialProductForm}
                productSelected={productSelected}
                visibleForm={visibleForm}
                handlerAddProduct={handlerAddProduct} 
                handlerRemoveProduct={handlerRemoveProduct}
                handlerProductSelectForm={handlerProductSelectForm}
                handlerAddProductCart={handlerAddProductCart} 
                handlerDeleteCart={handlerDeleteCart}
                handlerOpenForm={handlerOpenForm}
                handlerCloseForm={handlerCloseForm}/>
        </div>
    </>)
}