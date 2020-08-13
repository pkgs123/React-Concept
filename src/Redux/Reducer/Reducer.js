import action from '../Action/Action';

let initialState = {
    empName:''
}


const empReducer = (state = initialState,action) =>{

    switch(action.type){
        case 'EMPDETAILS':
            return {
                ...state,
                empName:action.payload
            }
            break;
        default: return state;
    }
}
export default empReducer;