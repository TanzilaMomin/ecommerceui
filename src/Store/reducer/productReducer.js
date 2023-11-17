export const productReducer=(state={prod : [], details : "", cart: []} , action)=>{
    switch(action.type){
        case "ADD_PRODUCT" :
            return{
                ...state,
                prod : [action.payload , ...state.prod]
            }
        case "P_DETAILS" :
            return{
                ...state,
                details : action.payload 
            }
        case "P_CART" :
            return{
                ...state,
                cart : [action.payload, ...state.cart]
            }
        case "REMOVE" :
            const filt = state.cart.filter((item,index)=>index !== action.payload)
            return{
                cart : filt 
            }
        default :
        return state ;
    }
    return state;
}