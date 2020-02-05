import {GET_DATA,RECEVIED} from './type'



export  const reducer =(state={lodding:false,data:""},action)=>{
switch(action.type){
    case GET_DATA:{
        console.log(action.data)
        return {...state,lodding:true}
    }
    case RECEVIED:{
            return {...state,lodding:false,data:action.data}
    }
    default:
        return state
}
}
export default reducer