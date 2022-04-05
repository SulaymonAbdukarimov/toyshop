import React from "react";
import { useContext } from "react";
import { showContext } from "./context";

function Cart() {
  const { order = [], handleBasketShow = Function.prototype } = useContext(
    showContext
  );
  const quantity = order.length;
  return (
    <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
