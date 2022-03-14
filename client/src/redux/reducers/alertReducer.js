const initState = {
    loading: false
};


export const alertReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOADING': { return { ...state, loading: action.payload } }    
            
        default: return state;
    }

    
}