import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../assets/assets';
import { StoreContext } from './Context/StoreContext';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Renamed for clarity
import PersonIcon from '@mui/icons-material/Person'; // Added for the user icon

const Navbar = ({ setshowLogin, userImg }) => {
  const [menu, setMenu] = useState('home');
  const { cartItems } = useContext(StoreContext);
  const cartCount = Object.values(cartItems).reduce((a, b) => a + b, 0);
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <img
        src={assets.logo}
        alt="Logo"
        className="logo"
        onClick={() => {
          setMenu('home');
          navigate('/');
        }}
      />
      <ul className="navbar-menu">
        <li
          onClick={() => {
            setMenu('home');
            navigate('/');
          }}
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </li>
        <li
          onClick={() => setMenu('menu')}
          className={menu === 'menu' ? 'active' : ''}
        >
          Menu
        </li>
        <li
          onClick={() => {
            setMenu('kitchen');
            navigate('/kitchen');
          }}
          className={menu === 'kitchen' ? 'active' : ''}
        >
          Kitchen
        </li>
        <li
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          Contact
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" className="search-icon" />
        <div className="navbar-search-icon" onClick={() => navigate('/cart')}>
          <IconButton color="primary" aria-label="shopping cart">
            <ShoppingCartIcon />
          </IconButton>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
        {userImg ? (
          <div className="navbar-profile">
            <IconButton color="inherit" aria-label="user profile">
              <PersonIcon />
            </IconButton>
            <span className="navbar-logged">Logged In</span>
          </div>
        ) : (
          <button onClick={() => setshowLogin(true)}>Sign-in</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;