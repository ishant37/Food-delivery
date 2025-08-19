
import React from 'react';
// import "./FoodItem.css";
// import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, description, image, quantity, addToCart, removeFromCart }) => {
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        <div className="food-item-cart-controls">
          {quantity > 0 ? (
            <div className="cart-qty-controls">
              <button className="cart-btn" onClick={removeFromCart}>-</button>
              <span className="cart-qty">{quantity}</span>
              <button className="cart-btn" onClick={addToCart}>+</button>
            </div>
          ) : (
            <button className="add-to-cart-btn" onClick={addToCart}>+</button>
          )}
        </div>
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p className="food-item-name">{name}</p>
          {/* <img className="food-item-rating" src={assets.rating_starts} alt="Rating" /> */}
        </div>
        <p className="food-item-des">{description}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
