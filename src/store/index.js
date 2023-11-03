import { legacy_createStore,combineReducers } from "redux"
import { CashReducer } from "./cashReducer"
import { customerReducer } from "./customerReducer"
import { composeWithDevTools } from '@redux-devtools/extension';

const rooReducer = combineReducers({
    cash: CashReducer,
    customers: customerReducer
})

export const store = legacy_createStore(rooReducer,composeWithDevTools())