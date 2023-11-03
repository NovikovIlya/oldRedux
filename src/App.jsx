import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state)=>state.cash.cash)
  const customers = useSelector((state)=>state.customers.customers)

  const addCash = (cash)=>{
    dispatch({type:'ADD_CASH',payload:cash})
  }

  const getCash = (cash)=>{
    dispatch({type:'GET_CASH',payload:cash})
  }

  const addCustomer = (name) =>{
    const customer = {
      name,
      id: Date.now()
    }
    dispatch({type:'ADD_CUSTOMER',payload:customer})
  }

  return (
    <>
      <div>
          <h1>{cash}</h1>
          <button onClick={()=>addCash(Number(prompt()))}>Пополнить</button>
          <button onClick={()=>getCash(Number(prompt()))}>Убавить</button>
          <button onClick={()=>addCustomer(prompt())}>Добавить клиента</button>
      </div>
      {customers.length > 0 ? 
      <div>{customers.map((customer)=>{
        return(
          <div key={customer.name}>{customer.name}</div>
        )
      })}</div>
      : <>Клиентов нет</>
      }
     
    </>
  )
}

export default App
