import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';


function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
  
    const validate = () => {
      let tempErrors = {};
      if (!formData.name) tempErrors.name = "Name is required";
      if (!formData.email) tempErrors.email = "Email is required";
      if (!formData.message) tempErrors.message = "Message is required";
      setErrors(tempErrors);
      return Object.keys(tempErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        // Aquí iría la lógica para enviar el formulario
        alert("Form submitted successfully!");
      }
    };
  
    return (
        
      <div className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <div>{errors.name && <span className="error">{errors.name}</span>}</div>


          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <div>{errors.email && <span className="error">{errors.email}</span>}</div>
  
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <div>{errors.message && <span className="error">{errors.message}</span>}</div>
  
          <Button type="submit" variant="contained" color="primary">
          Submit
          </Button>
        </form>
      </div>
    );
  }
  

export default Contact;
