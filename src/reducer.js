import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from './actions';

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case DECREASE: {
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount - 1 };
        }
        return item;
      });

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
    case GET_TOTALS: {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { amount, price } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;

          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        total,
        amount,
      };
    }

    case TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.toggle === 'inc') {
              return (item = { ...item, amount: item.amount + 1 });
            }
            if (action.payload.toggle === 'dec') {
              return (item = { ...item, amount: item.amount - 1 });
            }
          }

          return item;
        }),
      };

    default:
      return state;
  }
}

export default reducer;
