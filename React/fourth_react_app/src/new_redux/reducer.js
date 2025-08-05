import { ADD_TO_CART } from "./action";
import { REMOVE_FROM_CART } from "./action";
const initialState = {
  cart: [],
  count: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;

      const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);

      if (existingItemIndex >= 0) {
        const updatedCart = state.cart.map((cartItem, index) => {
          if (index === existingItemIndex) {
            return {
              ...cartItem,
              quantity: (cartItem.quantity || 1) + 1
            };
          }
          return cartItem;
        });

        return {
          ...state,
          cart: updatedCart
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...item, quantity: 1 }]
        };
      }
    }

    case REMOVE_FROM_CART: {
      const itemId = action.payload.id;
      const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id === itemId);

      if (existingItemIndex >= 0) {
        const item = state.cart[existingItemIndex];
        if (item.quantity > 1) {
          const updatedCart = state.cart.map((cartItem, index) => {
            if (index === existingItemIndex) {
              return {
                ...cartItem,
                quantity: cartItem.quantity - 1
              };
            }
            return cartItem;
          });

          return {
            ...state,
            cart: updatedCart
          };
        } else {
          const updatedCart = state.cart.filter(cartItem => cartItem.id !== itemId);

          return {
            ...state,
            cart: updatedCart
          };
        }
      }
      return state;
    }

    default:
      return state;
  }
};

export default cartReducer;