import React from 'react';
import './Footer.css';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaArrowUp
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { assets } from '../../assets/assets';


// Importing images - replace with your actual image paths
// import appStore from './assets/app-store.png';
// import windowsStore from './assets/windows-store.png';
// import googlePlay from './assets/google-play.png';
// import visa from './assets/visa.png';
// import mastercard from './assets/mastercard.png';
// import amex from './assets/amex.png';
// import paypal from './assets/paypal.png';
// import diners from './assets/diners.png';
// import discover from './assets/discover.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Search</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Information</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Shipping Details</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Refund & Return</a></li>
              <li><a href="#">Deliveries</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Information</h4>
            <ul>
              <li><a href="#">Search Terms</a></li>
              <li><a href="#">Advanced Search</a></li>
              <li><a href="#">Help & Faq's</a></li>
              <li><a href="#">Store Location</a></li>
              <li><a href="#">Order & Return</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact us</h4>
            <ul className="contact-info">
              <li><FaMapMarkerAlt className="icon" /> No: 58 A, East Madison Street, Baltimore, MD, USA 4508</li>
              <li><FaPhoneAlt className="icon" /> 0000 - 123456789</li>
              <li><FaEnvelope className="icon" /> mail@example.com</li>
              <li><FaClock className="icon" /> 9.30AM - 7.30PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-section">
            <h4>Connect with us</h4>
            <div className="social-icons">
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Download our app</h4>
            <div className="app-badges">
              <img src={assets.play_store} alt="" />
                      <img src={assets.app_store} alt="" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>All Right Reserved © 2025,</p>
          <div className="payment-icons">
            {/* <img src={visa} alt="Visa" />
            <img src={mastercard} alt="Mastercard" />
            <img src={amex} alt="American Express" />
            <img src={paypal} alt="Paypal" />
            <img src={diners} alt="Diners Club" />
            <img src={discover} alt="Discover" /> */}
          </div>
          <button onClick={scrollToTop} className="scroll-to-top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;