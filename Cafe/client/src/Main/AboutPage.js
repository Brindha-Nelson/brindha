import React from 'react';
import './AboutPage.css'; // Link to CSS file
import aboutImage from './Image/street-cafe.jpg'; // Make sure the image exists

const AboutPage = () => {
  return (
    <div className="about-container-a">
      <div className="about-content-a">
        <div className="about-text-a">
          <h1>Welcome to our Cafe</h1>
          <p>
            Nestled in a cozy corner surrounded by plants and books, our cafe was born
            from a love for peaceful spaces and rich flavors. Whether you're here to sip
            your morning cappuccino, work quietly, or catch up with friends, we've
            designed a space that feels just like home.
          </p>
          <p>
            We serve a thoughtfully crafted menu of hot and cold drinks, fresh pastries,
            and warm meals — all made with love and the best ingredients.
          </p>
          <p className="about-quote-a">
            <em>"Good things happen over coffee."</em>
          </p>
        </div>

        <div className="about-image-a">
          <img src={aboutImage} alt="Cafe Interior" />
        </div>
      </div>

      <div className="motive-box">
        <h3>Our Motive</h3>
        <p>
            At the heart of our cafe is a simple motive — to create a space where people can slow down, 
            feel at home, and connect. We believe that a good cup of coffee, a quiet corner, and a friendly smile 
            can brighten someone's day. That's why we started this cafe — not just to serve drinks, 
            but to offer a warm, welcoming experience where memories are brewed and comfort is always on the menu.
        </p>
</div>


    </div>
  );
};

export default AboutPage;
