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

        case 'updatePruduct':
            return state.map(p => {
                if(p.id === action.payload.id ){
                    return {
                        ...action.payload
                    };
                }
                return p;
            })

        default:
            return state;
    }
}