import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import "./FoodItem.css";

const FoodItem = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const quantity = cartItems[id] || 0;

  return (
    <div className="food-item">
      <img src={image} alt={name} className="food-item-image" />

      <h3>{name}</h3>
      <p>{description}</p>
      <p className="food-item-price">₹{price}</p>

      <div className="food-item-controls">
        {quantity === 0 ? (
          <button onClick={() => addToCart(id)}>Add to Cart</button>
        ) : (
          <>
            <button onClick={() => removeFromCart(id)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => addToCart(id)}>+</button>
          </>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
