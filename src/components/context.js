import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

import React from "react";
export const showContext = createContext();

const initialState = {
  products: [],
  loading: true,
  order: [],
  showBasket: false,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };

  value.incrementQuantity = (itemID) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id: itemID } });
  };

  value.decrementQuantity = (itemID) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id: itemID } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
  };

  value.setProducts = (data) => {
    dispatch({ type: "SET_PRODUCTS", payload: data });
  };

  return <showContext.Provider value={value}>{children}</showContext.Provider>;
};
