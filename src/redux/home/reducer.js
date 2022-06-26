import { THEME } from "./action"


const init = {
    theme : false
}

export const homeReducer = (store=init,{type, payload}) =>{
    switch(type){
        case THEME:
            return {
                ...store,
                theme : payload,
            }
        default:
            return store
    }
}