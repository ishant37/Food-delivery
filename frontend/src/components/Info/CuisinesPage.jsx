import React from 'react';
import './CuisinesPage.css';
import { LuChefHat } from "react-icons/lu"; // For European/American Cuisines
import { PiBowlFoodLight } from "react-icons/pi"; // For African/Oceanic Cuisines
import { GiChopsticks } from "react-icons/gi"; // For Asian Cuisines and Indian Cuisines

const CuisinesPage = () => {
  return (
    <div className="cuisines-page">
      <div className="cuisines-header">
        <h1>International Cuisines</h1>
        <p>Incredibly Tasty International Dish</p>
      </div>
      <div className="cuisines-content">
        <div className="cuisine-list left-column">
          <div className="cuisine-item">
            <div className="cuisine-icon"><PiBowlFoodLight /></div>
            <div className="cuisine-text">
              <h3>African Cuisines</h3>
              <p>Allenum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Melange icula euripidis,partem.</p>
            </div>
          </div>
          <div className="cuisine-item">
            <div className="cuisine-icon"><LuChefHat /></div>
            <div className="cuisine-text">
              <h3>American Cuisines</h3>
              <p>Ultrices neque ornare aenean euismod elementum nisi quis. Ac turpis egestas maecenas pharetra convallis posuere morbi</p>
            </div>
          </div>
          <div className="cuisine-item">
            <div className="cuisine-icon"><GiChopsticks /></div>
            <div className="cuisine-text">
              <h3>Asian Cuisines</h3>
              <p>Molestie ac feugiat sed lectus. Eget mi proin sed libero enim. In metus vulputate eu scelerisque felis. Vitae congue eu consequat.</p>
            </div>
          </div>
        </div>
        <div className="central-image">
          {/* The image will be dynamically inserted here */}
          <img src="https://i.postimg.cc/dtDhxtgh/Gemini-Generated-Image-vqs4hfvqs4hfvqs4.png" alt="Delicious International Dish" /> 
        </div>
        <div className="cuisine-list right-column">
          <div className="cuisine-item">
            <div className="cuisine-icon"><LuChefHat /></div>
            <div className="cuisine-text">
              <h3>European Cuisines</h3>
              <p>Facilisis mauris sit amet massa vitae tortor condimentum. Sit amet nisl purus in mollis nunc sed id eu mi bibendum.</p>
            </div>
          </div>
          <div className="cuisine-item">
            <div className="cuisine-icon"><PiBowlFoodLight /></div>
            <div className="cuisine-text">
              <h3>Oceanic Cuisines</h3>
              <p>Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Montes nascetur ridiculus mus mauris egestas integer.</p>
            </div>
          </div>
          <div className="cuisine-item">
            {/* <div className="cuisine-icon"><GiIndianHelmet /></div> */}
            <div className="cuisine-icon"><img src='' alt="" /></div>
            <div className="cuisine-text">
              <h3>Indian Cuisines</h3>
              <p>Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nec feugiat in fermentum posuere urna nec consequat semper.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuisinesPage;