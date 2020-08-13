import action from '../Action/Action';

let initialState = {
    photoData:[]
}

const photosDataResult = (state,action) =>{
    return{
        ...state,
        photoData:action.payload
    }
}

const photoReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'REDUX_THUNK_DATA':  
        // return{
        //     ...state,
        //     photoData:action.payload
        // }
        return photosDataResult(state,action)
        break;
        default: return state;
    }
    
}

export default photoReducer;