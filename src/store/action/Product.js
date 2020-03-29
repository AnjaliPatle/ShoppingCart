import * as actionTypes from './actionTypes'


export const AddToCart= (item)=>{
    return{
        type: actionTypes.ADD_TO_CART,
        item,
    }
}
export const DeleteFromCart= (item)=>{
    return{
        type: actionTypes.DEL_FROM_CART,
        item,
    }
}
