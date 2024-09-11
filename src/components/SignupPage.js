import React from 'react';
import './SignupPage.css';

const SignupPage = () => (
  <div className="signup-page">
    <div className="signup-container">
      <div className="logo-section">
        <h1>facebook</h1>
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
      <div className="signup-form-section">
        <div className="signup-form">
          <input type="text" placeholder="Full Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
);

export default SignupPage;