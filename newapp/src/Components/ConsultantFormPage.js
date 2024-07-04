import React, { useState } from 'react';
import '../Css/ConsultantFormPage.css'; // Assuming ConsultantFormPage.css is located in the correct directory

const ConsultantFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const countries = [
    'Select Country',
    'UK',
    'USA',
    'Canada',
    'Australia',
    'New Zealand',
    'Ireland',
    'Germany',
    'Sweden',
    'France',
    'Italy',
    'Singapore',
    'Malaysia'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Reset the form after submission (optional)
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      message: ''
    });
  };

  return (
    <div className="page-contents1">
      <h1>Consultant Form</h1>
      <form className="consultant-form" onSubmit={handleSubmit}>
        {/* Form fields for consultant form */}
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        
        <label>Country of Interest:</label>
        <select name="country" value={formData.country} onChange={handleChange} required>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
        
        <label>Messages:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows={4} />

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default ConsultantFormPage;
