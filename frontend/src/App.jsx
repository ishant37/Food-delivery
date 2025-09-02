import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AdminLogin from './Pages/AdminLogin.jsx';
import AdminDashboard from './Pages/AdminDashboard.jsx';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Kitchen from './components/Kitchen-items/Kitchen';
import './App.css';
import LoginPopup from './components/LoginPagePopUp/LoginPopup';
import LightRays from './components/React_bits/LightRays';

const App = () => {
  const [showLogin, setshowLogin] = useState(false);
  const [userImg, setUserImg] = useState(null);

  return (
    <>
      {showLogin && (
        <LoginPopup setshowLogin={setshowLogin} setUserImg={setUserImg} />
      )}

      {/* Background LightRays - Always behind */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          overflow: 'hidden'
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="red"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* Foreground Content */}
      <div className="app" style={{ position: 'relative', zIndex: 1 }}>
        <Navbar setshowLogin={setshowLogin} userImg={userImg} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/kitchen' element={<Kitchen />} />
          <Route path='/admin' element={<AdminLogin onLogin={() => window.location.href='/admin/dashboard'} />} />
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
