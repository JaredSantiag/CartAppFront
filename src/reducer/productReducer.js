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

        default:
            return state;
    }
}