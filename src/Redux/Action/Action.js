
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
export {empDetailsAction,empProfessionDetailsAction};