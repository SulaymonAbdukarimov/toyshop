import React, { Component } from "react";

const BasketItems = (props) => {
  const {
    id,
    name,
    price,
    quantity,
    incrementQuantity,
    decrementQuantity,
  } = props;

  return (
    <li className="collection-item">
      {name} X{quantity} = {price * quantity} <b>$</b>
      <span className="secondary-content">
        <a
          class="waves-effect waves-light btn btnq"
          onClick={() => incrementQuantity(id)}
        >
          <i className="material-icons left">exposure_plus_1</i>add
        </a>
        <a
          class="waves-effect waves-light btn red darken-1 btnq"
          onClick={() => decrementQuantity(id)}
          style={{ margin: "0px 10px" }}
        >
          <i className="material-icons left ">exposure_minus_1</i>
          remove
        </a>
        <a
          class="waves-effect waves-light btn red darken-4 btnq deleteBtn"
          onClick={() => props.removeFromBasket(id)}
        >
          <i className="material-icons basket-delete left">delete_forever</i>
          delete
        </a>
      </span>
    </li>
  );
};

export default BasketItems;
