import action from '../Action/Action';
let initialState = {
    companyName:'',
    experience:''
}

const empProfDetailAct = (state,action) => {
return {
    ...state,
    companyName:action.payload.companyName,
    experience:action.payload.experience
}
}

const EmpProfessionDetail = (state=initialState,action) =>{
        switch(action.type){
            case 'EMP_PROF_DETAILS':
                return empProfDetailAct(state,action)
            break;
            default: return state;

        }
}
export default EmpProfessionDetail
