import React, { useEffect, useContext } from "react";
import { showContext } from "./context";

import { API_URL } from "../config";
import { API_KEY } from "../config";

import ProductList from "./ProductList";
import Loader from "./Loader";
import Cart from "./Cart";
import BasketList from "./BasketList";

function Shop() {
  const { setProducts, loading, order, showBasket } = useContext(showContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.featured);
      });
  }, []);

  return (
    <div className="container content">
      <Cart quantity={order.length} />
      {loading ? <Loader /> : <ProductList />}
      {showBasket && <BasketList />}
    </div>
  );
}

export default Shop;
