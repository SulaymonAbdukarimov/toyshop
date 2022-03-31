import React, { useState, useEffect } from "react";

import { API_URL } from "../config";
import { API_KEY } from "../config";
import ProductList from "./ProductList";
import Loader from "./Loader";
import Cart from "./Cart";
import BasketList from "./BasketList";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [showBasket, setShowBasket] = useState(false);

  const handleBasketShow = () => {
    setShowBasket(!showBasket);
  };

  const addToBasket = (item) => {
    // item === har bir objectni id name pricega teng
    // target the clicked buttons data
    // if orders id equal to the id of website we will get it
    // let basketCopy = [...order];
    // if (basketCopy.findIndex((el) => el.id === item.id) === -1) {
    //   console.log("1");
    //   basketCopy.push({ ...item, quantity: 1 });
    // } else {
    //   console.log(2);
    //   basketCopy = basketCopy.map((el) => {
    //     if (el.id === item.id) {
    //       console.log(3);
    //       return { ...el, quantity: el.quantity + 1 };
    //     } else {
    //       console.log(4);
    //       return el;
    //     }
    //   });
    // }
    // console.log(basketCopy);
    // setOrder(basketCopy);

    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((item) => item.id !== itemId);
    setOrder(newOrder);
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
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Loader />
      ) : (
        <ProductList products={products} addToBasket={addToBasket} />
      )}
      {showBasket && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
        />
      )}
    </div>
  );
}

export default Shop;
