// import React, { useContext } from 'react';
// import './Cart.css';
// import { StoreContext } from '../../components/Context/StoreContext';

// const Cart = () => {
//   const { cartItems, food_list, addToCart, removeFromCart } = useContext(StoreContext);
//   // Fix: use _id for cartItems and fallback to id if needed
//   const cartFood = food_list.filter(item => cartItems[item._id || item.id] > 0);
//   const total = cartFood.reduce((sum, item) => sum + item.price * (cartItems[item._id || item.id] || 0), 0);
//   return (
//     <div className="cart-page">
//       <h2>Your Cart</h2>
//       {cartFood.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div className="cart-list">
//           {cartFood.map(item => {
//             const itemId = item._id || item.id;
//             return (
//               <div className="cart-item" key={itemId}>
//                 <img src={item.image} alt={item.name} className="cart-item-img" />
//                 <div className="cart-item-info">
//                   <p className="cart-item-name">{item.name}</p>
//                   <p className="cart-item-price">₹{item.price}</p>
//                   <div className="cart-qty-controls">
//                     <button className="cart-btn" onClick={() => removeFromCart(itemId)}>-</button>
//                     <span className="cart-qty">{cartItems[itemId]}</span>
//                     <button className="cart-btn" onClick={() => addToCart(itemId)}>+</button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//           <div className="cart-total">Total: ₹{total}</div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;

import React, { useContext } from "react";
import { StoreContext } from "../../components/Context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  
  // Calculate subtotal
  const subtotal = food_list.reduce((acc, item) => {
    const quantity = cartItems?.[item._id] || 0;
    return acc + (item.price * quantity);
  }, 0);

  // Delivery fee
  const deliveryFee = 2;

  // Total calculation
  const total = subtotal + deliveryFee;

  const navigate=useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {Array.isArray(food_list) &&
          food_list.map((item) => {
            const quantity = cartItems?.[item._id] || 0; // safe access
            if (quantity > 0) {
              return (
                <div key={item._id} className="cart-items-title cart-item-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{quantity}</p>
                  <p>₹{item.price * quantity}</p>
                  <p
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => removeFromCart(item._id)}
                  >
                    ❌
                  </p>
                </div>
              );
            }
            return null;
          })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{subtotal}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹{deliveryFee}</p>
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>₹{total}</b>
          </div>
        </div>
        <button onClick={()=>navigate("/order")}>Proceed to Payment</button>
      </div>
      <div className="cart-promo-code">
        <p>If you have any promocode enter here</p>
        <div className="cart-promocode-input">
          <input type="text" placeholder="Promocode" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

