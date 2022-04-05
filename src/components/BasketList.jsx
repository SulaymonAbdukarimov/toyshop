import React from "react";
import BasketItems from "./BasketItems";
import { useContext } from "react";
import { showContext } from "./context";
function BasketList() {
  const { order = [], handleBasketShow = Function.prototype } = useContext(
    showContext
  );

  const totalPrice = order.reduce((a, b) => a + b.price * b.quantity, 0);
  return (
    <div className="bsk">
      <ul className="collection basket-list">
        <li className="collection-item active">Basket</li>
        {order.length ? (
          order.map((item) => {
            return <BasketItems key={item.id} {...item} />;
          })
        ) : (
          <li className="collection-item">Basket is empty</li>
        )}
        <li className="collection-item active">
          Total price: {totalPrice} <b>$</b>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          close
        </i>
      </ul>
    </div>
  );
}

export default BasketList;
