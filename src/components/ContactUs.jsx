import React, { useState } from 'react';
import './css/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the Google Form link
    window.open('https://forms.gle/dWK6mw1cA2M9aG1j9', '_blank');
  };

  return (
    <div className="contact-container pt-14">
      <h2>Contact Us</h2>
      <p>If you have any questions, concerns, or feedback, feel free to reach out to us. We’re here to help you!</p>
      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Details Section */}
        {/* <div className="contact-details pt-16">
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> Chandan Kumar Saw</p>
          <p><strong>Email:</strong> chandan1951a@gmail.com</p>
          <p><strong>Phone:</strong> 8271053827</p>
          <p><strong>Address:</strong> Kolkata, West Bengal</p>
        </div> */}
      </div>
    </div>
  );
};

export default ContactUs;
