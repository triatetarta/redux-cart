import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from './actions';

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case DECREASE: {
      let tempCart = [];
      if (action.payload.amount === 1) {
        tempCart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        tempCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item = { ...item, amount: item.amount - 1 };
          }
          return item;
        });
      }
      return {
        ...state,
        cart: tempCart,
      };
    }
    case INCREASE: {
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return {
        ...state,
        cart: tempCart,
      };
    }
    case REMOVE: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
}

export default reducer;
