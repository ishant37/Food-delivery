import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  const handleViewMenu = () => {
    const menuSection = document.getElementById("menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className='header'
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring</p>
        <button onClick={handleViewMenu}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
