
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Kitchen from './components/Kitchen-items/Kitchen';
import './App.css';
import LoginPopup from './components/LoginPagePopUp/LoginPopup';

const App = () => {
  const [showLogin, setshowLogin] = useState(false);
  const [userImg, setUserImg] = useState(null);
  return (
    <>
      {showLogin ? <LoginPopup setshowLogin={setshowLogin} setUserImg={setUserImg} /> : null}
      <div className='app'>
        <Navbar setshowLogin={setshowLogin} userImg={userImg} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/kitchen' element={<Kitchen />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
