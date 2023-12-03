import React from 'react';
import './ContactPage.css'; 

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions or feedback? Reach out to us!</p>

      <div className="contact-details">
        <p><strong>Email:</strong> info@manoagro.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Address:</strong> 123 Main Street, Cityville</p>
      </div>
    </div>
  );
};

export default ContactPage;
