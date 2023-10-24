export const ProductRow = ({ id,name,price }) => {
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
                <button type="button" className="btn btn-danger btn-sm">
                    remove
                </button>
            </td>
        </tr>
    )
}