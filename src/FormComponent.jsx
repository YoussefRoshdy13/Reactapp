import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormComponent.css'; // Import the CSS file


function FormComponent() {
  const navigate = useNavigate();
  
  // State for form fields
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    country: '',
  });

  // State for error messages
  const [errors, setErrors] = useState({});

  // List of countries for the dropdown
  const countries = ['USA', 'Canada', 'UK', 'Australia'];

  // Validation Function
  const validateForm = () => {
    const newErrors = {};

    // Username validation: required and at least 3 characters
    if (!formData.username || formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    // Email validation: simple regex check
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone number validation: must be 10 digits
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }

    // Country validation: required
    if (!formData.country) {
      newErrors.country = 'Please select a country';
    }

    setErrors(newErrors);
    
    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted:', formData);
      // Clear the form if successfully submitted
      setFormData({ username: '', email: '', phoneNumber: '', country: '' });
      setErrors({});
    }
  };

  // Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Form Submission</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
        </div>
        
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber}</span>}
        </div>

        <div>
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select a Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
          {errors.country && <span style={{ color: 'red' }}>{errors.country}</span>}
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
}

export default FormComponent;
