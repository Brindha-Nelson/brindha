import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="intro-text">We’d love to hear from you — whether it's a question, a suggestion, or just a friendly hello.</p>

      <div className="contact-info">
        <div className="info-box">      
          <h3>📍 Our Location</h3>
          <p>4-81 , Kattuvilai veedu , Market ward , Marthandam</p>
        </div>

        <div className="info-box">
          <h3>📞 Call Us</h3>
          <p>8903942002</p>
        </div>

        <div className="info-box">
          <h3>🕒 Hours</h3>
          <p>Open daily: 8:00 AM – 8:00 PM</p>
        </div>

        <div className="info-box">
          <h3>✉️ Email</h3>
          <p>mycafe@gmail.com</p>
        </div>
      </div>

      <div className="map-embed">
        <iframe
          title="Cafe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4695.594568833926!2d77.25310144626616!3d8.2520607038732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ff13ef1d041b%3A0x61d4bcc4405adc0!2s4%2F91A%2C%204%2F91A%2C%20Kattuvilai%2C%20Tamil%20Nadu%20629169!5e0!3m2!1sen!2sin!4v1746350481334!5m2!1sen!2sin" 
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
