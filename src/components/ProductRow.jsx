export const ProductRow = ({ id,name,price,handlerRemoveProduct }) => {
    
    const onRemoveProduct = (id) => {
        handlerRemoveProduct(id);
    }
    
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <button type="button" className="btn btn-secondary btn-sm">
                    update
                </button>
            </td>
            <td>
                <button 
                    type="button" 
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemoveProduct(id)}>
                    remove
                </button>
            </td>
        </tr>
    )
}