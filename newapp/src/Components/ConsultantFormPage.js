import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../Css/ConsultantFormPage.css';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    try {
      // Combine login and form data
      const combinedData = {
        ...formData,
        loginData: {
          username: 'username_from_login', // Replace with actual login username or ID
          // Add more login data if needed
        }
      };

      // Replace with your actual API endpoint
      const response = await axios.post('https://sheet.best/api/sheets/12283d44-281f-42f8-8bd6-ba8e0900e285', combinedData);
      console.log('Form Submission Response:', response.data);

      // Optionally reset form fields after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: ''
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
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
        <div className='but'>
       <Link to="/mainpage"> <button type="submit" >BACK</button></Link>
        <button type="submit" className="submit-button">Submit</button>
 </div>
      </form>
    </div>
  );
}

export default ConsultantFormPage;
