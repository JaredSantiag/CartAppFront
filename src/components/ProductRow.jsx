export const ProductRow = ({ id,name,price,description,handlerRemoveProduct,handlerProductSelectForm }) => {
    
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <button 
                    type="button" 
                    className="btn btn-secondary btn-sm"
                    onClick={() => handlerProductSelectForm({
                        id,
                        name,
                        price,
                        description
                    })}>
                    update
                </button>
            </td>
            <td>
                <button 
                    type="button" 
                    className="btn btn-danger btn-sm"
                    onClick={() => handlerRemoveProduct(id)}>
                    remove
                </button>
            </td>
        </tr>
    )
}