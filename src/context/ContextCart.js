import React, { useReducer } from "react";

export const CartContext = React.createContext();

const initialState = {
  selectItem: [],
  itemCounter: 0,
  total: 0,
  chckOut: false,
};

const Calculations = (item) => {
  const itemCounter = item.reduce((total, product) => total + product.quntity, 0);
  const total = item.reduce((total, product) => total + product.price * product.quntity, 0)
  return {itemCounter, total}
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
        if(!state.selectItem.find(item => item.id === action.payload.id )){
            state.selectItem.push({...action.payload , quntity:1})
        }
        return{
            ...state, selectItem:[...state.selectItem], ...Calculations(state.selectItem),chckOut:false
        }

    case "REMOVE":
        const newSelectedItem = state.selectItem.filter(item => item.id !== action.payload.id);
        return{
            ...state,selectItem:[...newSelectedItem],...Calculations(newSelectedItem)
        }

    case "UP":
        const indexUp = state.selectItem.findIndex(item => item.id === action.payload.id);
        state.selectItem[indexUp].quntity++;
        return{
            ...state ,...Calculations(state.selectItem)
        }

    case "DOWN":
        const indexDown = state.selectItem.findIndex(item => item.id === action.payload.id);
        state.selectItem[indexDown].quntity--;
        return{
            ...state ,...Calculations(state.selectItem)
        } 

    case "CHCKOUT":
      return {
        selectItem: [],
        itemCounter: 0,
        total: 0,
        chckOut: true,
      };

    case "CLEAR":
      return {
        selectItem: [],
        itemCounter: 0,
        total: 0,
        chckOut: false,
      };

    default:
      return state;
  }
};

const ContextCart = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>

        {children}
        
    </CartContext.Provider>
  );
};

export default ContextCart;
