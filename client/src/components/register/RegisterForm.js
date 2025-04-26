import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: '',
    address: '',
    usedGoogle: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoogleSignup = () => {
    alert('Redirect to Google Signup');
    // Simulate Google signup – disable password fields
    setFormData((prev) => ({ ...prev, usedGoogle: true }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.address) newErrors.address = 'Address is required';

    if (!formData.usedGoogle) {
      if (!formData.password) newErrors.password = 'Password is required';
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
    } else {
      setErrors({});
      alert('Registered successfully!');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <div className="form-group">
          <label>Full Name</label>
          <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Jane Doe" />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 8901" />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        {!formData.usedGoogle && (
          <>
            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="••••••••" />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="••••••••" />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
          </>
        )}

        <div className="form-group">
          <label>User Role <span className="optional">(optional)</span></label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select role</option>
            <option value="Elder">Elder</option>
            <option value="Family Member">Family Member</option>
            <option value="Caregiver">Caregiver</option>
          </select>
        </div>

        <div className="form-group">
          <label>Address / City</label>
          <input name="address" value={formData.address} onChange={handleChange} placeholder="New York, NY" />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <button type="submit" className="register-button">Register</button>

        <div className="divider">or</div>

        <button type="button" className="google-button" onClick={handleGoogleSignup}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
          Sign up with Google
        </button>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
