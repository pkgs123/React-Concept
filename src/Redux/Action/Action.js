import axios from 'axios';

const empDetailsAction = (data) =>{
    return{
        type:'EMPDETAILS',
        payload:data
    }
}

const empProfessionDetailsAction = (compName,exp) =>{
    return{
        type:'EMP_PROF_DETAILS',
        payload:{
            companyName:compName,
            experience:exp
        }
    }
}

const reduxThunkAction =  () =>{

    let path = 'https://jsonplaceholder.typicode.com/photos';

    return async (dispatch) =>{

        let response = await axios.get(path,{headers:{},params:{}})

        dispatch({
            type:'REDUX_THUNK_DATA',
            payload:response.data
        })
    }

}
export {empDetailsAction,empProfessionDetailsAction,reduxThunkAction};