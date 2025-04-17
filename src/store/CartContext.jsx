import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      // ... update the state to add a meal item
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id,
      );
      const updatedItems = [...state.items];
      console.log("State ====> ", state);
      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }

      return { ...state, items: updatedItems };
    case "REMOVE_ITEM":
      // ... remove an item from the state
      break;
  }
  return state;
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, {
    items: [],
  });
  return <CartContextProvider>{children}</CartContextProvider>;
}

export default CartContext;
