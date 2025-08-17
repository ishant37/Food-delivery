import React, { useContext } from 'react';
import "./PlaceOrder.css";
import { StoreContext } from "../../components/Context/StoreContext";

const PlaceOrder = () => {
  const { food_list, cartItems } = useContext(StoreContext);
  const subtotal = food_list.reduce((acc, item) => {
    const quantity = cartItems?.[item._id] || 0;
    return acc + (item.price * quantity);
  }, 0);
  const deliveryFee = 2;
  const total = subtotal + deliveryFee;

  // Prevent form submit from reloading page
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your order logic here
  };

  return (
    <form className="place-order" onSubmit={handleSubmit} autoComplete="off">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" name="firstName" autoComplete="off" />
          <input type="text" placeholder="Last name" name="lastName" autoComplete="off" />
        </div>
        <input type="email" placeholder="Email address" name="email" autoComplete="off" />
        <input type="text" placeholder="Street" name="street" autoComplete="off" />
        <div className="multi-fields">
          <input type="text" placeholder="City" name="city" autoComplete="off" />
          <input type="text" placeholder="State" name="state" autoComplete="off" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" name="zip" autoComplete="off" />
          <input type="text" placeholder="Country" name="country" autoComplete="off" />
        </div>
        <input type="number" placeholder='Phone number' name="phone" autoComplete="off" />
      </div>

      <div className="place-order-right">
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
          <button type="submit">Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
