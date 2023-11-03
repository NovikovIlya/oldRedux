const defaultSctate = {
    customers : [] ,
  }


export const customerReducer = (state = defaultSctate,action)=>{
    switch(action.type){
      case "ADD_CUSTOMER":
       return {...state,
                customers:[...state.customers, action.payload]}
      case "REMOVE_CUSTOMERS":
        return {...state,
                customers:state.cash - action.payload}
      default:
        return state
    }
  }