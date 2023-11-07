import { legacy_createStore,combineReducers, applyMiddleware } from "redux"
import { CashReducer } from "./cashReducer"
import { customerReducer } from "./customerReducer"
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rooReducer = combineReducers({
    cash: CashReducer,
    customers: customerReducer
})

export const store = legacy_createStore(rooReducer,composeWithDevTools(applyMiddleware(thunk,sagaMiddleware)))

sagaMiddleware.run(rootWatcher)