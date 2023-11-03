const defaultSctate = {
  cash: 0,
};

export const CashReducer = (state = defaultSctate, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return { ...state, cash: state.cash + action.payload };
    case 'GET_CASH':
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};
