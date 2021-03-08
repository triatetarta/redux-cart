import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from './actions';

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case DECREASE: {
      return {
        ...state,
      };
    }
    case INCREASE: {
      return {
        ...state,
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
