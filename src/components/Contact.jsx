import React from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = ({ isPopupOpen, setIsPopupOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_ary0d88', // Replace with your EmailJS service ID
        'template_r26d84g', // Replace with your EmailJS template ID
        formData,
        'padvp_t7uVa2G-si5' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          setIsPopupOpen(false); // Close the popup after successful submission
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <>
      {isPopupOpen && (
        <div className="contact-popup">
          <div className="popup-content">
            <button
              className="close-button"
              onClick={() => setIsPopupOpen(false)}
            >
              &times;
            </button>
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-description">
              Have a question or want to work together? Fill out the form below, and I'll get back to you as soon as possible!
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="form-textarea"
                ></textarea>
              </div>
              <button type="submit" className="form-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;