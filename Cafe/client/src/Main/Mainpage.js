import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mainpage.css';
import coffeeHero from './Image/coffee_shop_with_warm_atmosphere.jpeg'; // Replace with your actual image path

function HomePage() {

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/Home'); // this navigates to HomePage
  };

  return (
    <div className="hero-section">
      <div className="hero-text">
        <h3>Welcome to Our Cafe</h3>
        <h1>Enjoy Your <br /> Coffee</h1>
        <p>
          Experience the best coffee and cozy atmosphere at our cafe. <br />
          Relax and unwind with our selection of hot and cold beverages.
        </p>
        <button className="hero-button" onClick={goToHomePage}>VIEW MENU</button>
      </div>
      <div className="hero-image">
        <img src={coffeeHero} alt="Coffee cup" />
      </div>
    </div>
  );
}

export default HomePage;
