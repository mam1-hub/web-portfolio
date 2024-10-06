import React, { useState } from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      // Formu temizleyebilirsiniz
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-textarea"
              placeholder="Your Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="form-button">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: MaMi@example.com</p>
          <p>Phone: +90 555 123 45 67</p>
          <div className="social-icons">
            <a href="https://github.com" className="social-icon" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
