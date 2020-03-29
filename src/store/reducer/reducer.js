import * as actTypes from "../action/actionTypes"

const initValues = {
    addedItems: [],
    total: 0,
}

 const AddToCart=(state,action)=>{ 
     let newItems=[];
     let newItem=state.addedItems.indexOf(action.item);
     if(newItem===-1){
         newItems=[...state.addedItems,action.item]
     }
     else{
         newItems=[...state.addedItems];
         newItems[newItem].unit=newItems[newItem].unit+1;
     }
    
    return{
        ...state,
        
        addedItems: newItems,
        total: state.total+action.item.price,
    }
}
const DeleteFromCart=(state,action)=>{ 
    let newItem=state.addedItems.indexOf(action.item);
    let newItems=[...state.addedItems];
    if(state.addedItems.length!=0){
    newItems[newItem].unit=newItems[newItem].unit-1;
    
    if(newItems[newItem].unit=='0'){
     newItems=state.addedItems.filter((x)=>{return x!==action.item});
    }
    }
   return{
       ...state,
       addedItems: newItems,
       total: state.total-action.item.price,
   }
}
const CartReducer = (state = initValues, action) => {
    switch (action.type) {
        case actTypes.ADD_TO_CART:
            return AddToCart(state,action)
        case actTypes.DEL_FROM_CART:
            return DeleteFromCart(state,action)
        default:
            return state
    }
}

export default CartReducer;
