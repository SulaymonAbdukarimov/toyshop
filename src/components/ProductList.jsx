import React from "react";
import ProductItem from "./ProductItem";
function ProductList(props) {
  const { products = [], addToBasket } = props;
  if (!products.length) {
    return <h2>Nothing Here!</h2>;
  }

  return (
    <div className="goods">
      {products.map((el) => (
        <ProductItem key={el.id} {...el} addToBasket={addToBasket} />
      ))}
    </div>
  );
}

export default ProductList;
