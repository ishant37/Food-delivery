import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../assets/assets';
import { StoreContext } from './Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setshowLogin, userImg }) => {
  const [menu, setmenu] = useState("home");
  const { cartItems } = useContext(StoreContext);
  const cartCount = Object.values(cartItems).reduce((a, b) => a + b, 0);
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" style={{cursor:'pointer'}} onClick={() => { setmenu('home'); navigate('/'); }} />
      <ul className="navbar-menu">
        <li onClick={() => { setmenu("home"); navigate('/'); }} className={menu === 'home' ? 'active' : ''}>Home</li>
        <li onClick={() => setmenu("menu")} className={menu === 'menu' ? 'active' : ''}>Menu</li>
        <li onClick={() => { setmenu("home"); navigate('/kitchen'); }} className={menu === 'kitchen' ? 'active' : ''}>Kitchen items</li>
        <li onClick={() => setmenu("contact-us")} className={menu === 'contact-us' ? 'active' : ''}>Contact-us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon" onClick={() => navigate('/cart')} style={{cursor:'pointer'}}>
          <img src={assets.basket_icon} alt="Cart" />
          {cartCount > 0 && <div className="cart-count">{cartCount}</div>}
        </div>
        {userImg ? (
          <span className="navbar-logged">Logged</span>
        ) : (
          <button onClick={() => setshowLogin(true)}>
            Sign-in
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
