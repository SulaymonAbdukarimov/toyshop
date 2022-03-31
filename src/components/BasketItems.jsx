import React from "react";

const BasketItems = (props) => {
  const { id, name, price, quantity } = props;

  return (
    <li className="collection-item">
      {name} X{quantity} = {price * quantity} <b>$</b>
      <span
        className="secondary-content"
        onClick={() => props.removeFromBasket(id)}
      >
        <i className="material-icons basket-delete red-text">delete_forever</i>
      </span>
    </li>
  );
};

export default BasketItems;
