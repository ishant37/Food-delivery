

import React, { useState } from 'react';
import "./LoginPopup.css";
import { assets } from '../../assets/assets';

const LoginPopup = ({ setshowLogin, setUserImg }) => {
  const [currentState, setCurrentState] = useState("Login");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserImg('logged');
    setshowLogin(false);
  };

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-pop-title">
          <h2>{currentState}</h2>
          <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className="login-popup-inputs">
          {currentState === "Sign Up" && <input type="text" placeholder='Your Name' />}
          <input type="email" placeholder='Email address' />
          <input type="password" placeholder='Password' />
        </div>

        <button type="submit">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required /> <span>I agree to the terms & conditions</span>
        </div>

        {currentState === "Login" ? (
          <p>Create a new account? 
            <span onClick={() => setCurrentState("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p>Already have an account? 
            <span onClick={() => setCurrentState("Login")}> Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
