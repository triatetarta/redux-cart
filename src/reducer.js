import { DECREASE, INCREASE, CLEAR_CART } from './actions';

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}

export default reducer;
