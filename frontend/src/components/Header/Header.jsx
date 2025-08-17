import React from "react";
// import "./Background.css";
import "./Header.css";
import { assets } from "../../assets/assets";

export default function HeroSection() {
  const handleViewMenu = () => {
    const menuSection = document.getElementById("menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-section">
      {/* Background Carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1920"
              className="d-block w-100 carousel-image"
              alt="Scenic Landscape"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1920"
              className="d-block w-100 carousel-image"
              alt="City View"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1920"
              className="d-block w-100 carousel-image"
              alt="Beach Scene"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.pinimg.com/564x/4b/bb/71/4bbb714adc1b9a50b6fdb35a6e1c99ac.jpg"
              className="d-block w-100 carousel-image"
              alt="Fruits and Vegetables"
            />
          </div>
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Header Overlay */}
      <div className="header-overlay">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring</p>
        <button onClick={handleViewMenu}>View Menu</button>
      </div>
    </div>
  );
}
