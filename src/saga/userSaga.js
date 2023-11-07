import { put, takeEvery,call } from 'redux-saga/effects';
import {addCustomerAction,ASYNC_ADD_CUSTOMER} from '../store/customerReducer'


const fetchUsersfromApi = ()=> fetch('https://jsonplaceholder.typicode.com/users?_limit=10')


function* fetchWorker(){
    const data = yield call(fetchUsersfromApi)

    //Массив пользователей получили
    const json = yield call(()=>new Promise(res=>res(data.json())))
    yield put(addCustomerAction(json))
}

export function* userWatcher(){
    yield takeEvery(ASYNC_ADD_CUSTOMER,fetchWorker)
}