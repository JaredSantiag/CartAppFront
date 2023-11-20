import { useItemsCart } from "../hooks/useItemCart";
import { useProduct } from "../hooks/useProduct";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {

    const {
        cartItems,
        handlerAddProductCart,
        handlerDeleteCart
    } = useItemsCart();

    const {
        products,
        initialProductForm,
        productSelected,
        visibleForm,
        errors,
        handlerAddProduct,
        handlerRemoveProduct,
        handlerProductSelectForm,
        handlerOpenForm,
        handlerCloseForm,
        getProducts
    } = useProduct();

    return (
        <ProductContext.Provider value={
            {
                cartItems,
                handlerAddProductCart,
                handlerDeleteCart,
                products,
                initialProductForm,
                productSelected,
                visibleForm,
                errors,
                handlerAddProduct,
                handlerRemoveProduct,
                handlerProductSelectForm,
                handlerOpenForm,
                handlerCloseForm,
                getProducts
            }
        }>
            {children}
        </ProductContext.Provider>
    );
}