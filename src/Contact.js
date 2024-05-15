import React, { useState } from 'react';
import './App.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Example: Log form data to console
  };

  return (
    <div className="contact-container">
      <div className="contact-text">
        <p className="contact">Get in touch!</p>
        <p className="contact-description">Need to get in touch? Just fill out the forms and you're ready to go.</p>
        <p className="contact-description">Email: <a href="mailto:johnmatthew.lirio007@gmail.com" style={{ color: '#FF6B00' }}>johnmatthew.lirio007@gmail.com</a></p>

      </div>
      
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments:</label>
            <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
