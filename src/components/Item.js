import React, { useState } from "react";

function Item({ name, category }) {
  const [cartStatus, setCartStatus] = useState(true);
  function handleCart() {
    setCartStatus((cartStatus) => !cartStatus);
  }
  const liClass = cartStatus ? "" : "in-cart";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>
        {cartStatus ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
