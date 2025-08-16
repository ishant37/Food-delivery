
import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../components/Context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, addToCart, removeFromCart } = useContext(StoreContext);
  // Fix: use _id for cartItems and fallback to id if needed
  const cartFood = food_list.filter(item => cartItems[item._id || item.id] > 0);
  const total = cartFood.reduce((sum, item) => sum + item.price * (cartItems[item._id || item.id] || 0), 0);
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartFood.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-list">
          {cartFood.map(item => {
            const itemId = item._id || item.id;
            return (
              <div className="cart-item" key={itemId}>
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">₹{item.price}</p>
                  <div className="cart-qty-controls">
                    <button className="cart-btn" onClick={() => removeFromCart(itemId)}>-</button>
                    <span className="cart-qty">{cartItems[itemId]}</span>
                    <button className="cart-btn" onClick={() => addToCart(itemId)}>+</button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="cart-total">Total: ₹{total}</div>
        </div>
      )}
    </div>
  );
}

export default Cart;
