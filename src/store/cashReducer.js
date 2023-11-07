const defaultSctate = {
  cash: 0,
};

export const ADD_CASH = 'ADD_CASH';
export const GET_CASH = 'GET_CASH';

export const ONE_PLUS = 'ONE_PLUS';
export const ONE_MINUS = 'ONE_MINUS';


export const ASYNC_ONE_PLUS = 'ASYNC_ONE_PLUS';
export const ASYNC_ONE_MINUS = 'ASYNC_ONE_MINUS';

export const CashReducer = (state = defaultSctate, action) => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload };
    case ONE_PLUS:
      return { ...state, cash: state.cash + 1 };
    case ONE_MINUS:
      return { ...state, cash: state.cash - 1 };
    case GET_CASH:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export const addCashAction = (payload) => ({ type: ADD_CASH, payload });
export const getCashAction = (payload) => ({ type: GET_CASH, payload });

export const incrementCreator = () => ({type: ONE_PLUS})
export const decrementCreator = () => ({type: ONE_MINUS})


export const asyncIncrementCreator = () => ({ type: ASYNC_ONE_PLUS });
export const asyncDecrementCreator = () => ({ type: ASYNC_ONE_MINUS });
