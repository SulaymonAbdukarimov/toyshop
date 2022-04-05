import React from "react";
import ProductItem from "./ProductItem";
import { useContext } from "react";
import { showContext } from "./context";

function ProductList() {
  const { products = [] } = useContext(showContext);

  if (!products.length) {
    return <h2>Nothing Here!</h2>;
  }

  return (
    <div className="goods">
      {products.map((el) => (
        <ProductItem key={el.id} {...el} />
      ))}
    </div>
  );
}

export default ProductList;
