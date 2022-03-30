import React, { useState, useEffect } from "react";
import { API_URL } from "../config";
import { API_KEY } from "../config";
import ProductList from "./ProductList";
import Loader from "./Loader";
import Cart from "./Cart";
function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  console.log(order);

  const addToBasket = (item) => {
    // item === har bir objectni id name pricega teng
    // target the clicked buttons data
    // if orders id equal to the id of website we will get it
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    // hali qoshilmagan bulsa
    if (itemIndex < 0) {
      // if you clicked once only work this
      const newItem = {
        ...item,
        quantity: 1,
      };
      console.log("working");
      setOrder([...order, newItem]);
    } else {
      // view of basket
      // if you clicked that card more than 1, this will work
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          console.log(5);
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          console.log(6);
          return orderItem;
        }
      });
      console.log(7);
      setOrder(newOrder);
    }
    console.log(8);
    console.log("----------------------");
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.featured && setProducts(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container content">
      <Cart quantity={order.length} />
      {loading ? (
        <Loader />
      ) : (
        <ProductList products={products} addToBasket={addToBasket} />
      )}
    </div>
  );
}

export default Shop;
