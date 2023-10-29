export const productReducer = (state =[], action) => {
    
    switch (action.type){
        case 'addPruduct':

            return [
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime()
                }
            ];

        case 'removeProduct':
            return state.filter(product => product.id !== action.payload)

        default:
            return state;
    }
}