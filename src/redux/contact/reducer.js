import { LOADING, SUCCESS , ERROR} from "./action"



const initState = {
    loading:false,
    error:false,
    message:""
}

 export const sendReducer = (store=initState, {type, payload})=>{
    switch(type){
        case LOADING:
            return {...store, loading:true};
        case SUCCESS:
            return {
                ...store,
                loading:false,
                error:false,
                message:payload.message
            }
        case ERROR:
            return {
                ...store,
                loading:false,
                error:true,
                message:"",
            }
        default:
            return store;
    }
}