import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { AsyncaddCustomerAction, addCustomerAction, removeCustomerAction } from './store/customerReducer'
import { addCashAction, getCashAction, asyncIncrementCreator, asyncDecrementCreator } from './store/cashReducer'
import { fetchCustomers } from './store/asyncAction'


function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state)=>state.cash.cash)
  const customers = useSelector((state)=>state.customers.customers)

  const addCash = (cash)=>{
    dispatch(addCashAction(cash))
  }

  const getCash = (cash)=>{
    dispatch(getCashAction(cash))
  }

  const addCustomer = (name) =>{
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (customer)=>{
    dispatch(removeCustomerAction(customer.id))
  }
  console.log('customers',customers)
  return (
    <>
      <div>
          <h1>{cash}</h1>
          <button onClick={()=>addCash(Number(prompt()))}>Пополнить</button>
          <button onClick={()=>getCash(Number(prompt()))}>Убавить</button>
          <button onClick={()=>addCustomer(prompt())}>Добавить клиента</button>
          <button onClick={()=>dispatch(fetchCustomers())}>Получить клиентов из базы</button>
          <button onClick={()=>dispatch(asyncIncrementCreator())}>Пополнить с сагой</button>
          <button onClick={()=>dispatch(asyncDecrementCreator())}>Убавить с сагой</button>
          <button onClick={()=>dispatch(AsyncaddCustomerAction())}>Получить юзеров с сагой</button>
          
      </div>
      {customers.length > 0 ? 
      <div>{customers.map((customer)=>{
        return(
          <div onClick={()=>removeCustomer(customer)} key={customer.name}>{customer.name}</div>
        )
      })}</div>
      : <>Клиентов нет</>
      }
     
    </>
  )
}

export default App
