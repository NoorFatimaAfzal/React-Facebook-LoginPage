import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => (
  <div className="login-page">
    <div className="login-container">
      <div className="logo-section">
        <h1>facebook</h1>
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
      <div className="login-form-section">
        <div className="login-form">
          <input type="email" placeholder="Email or Phone" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="login-btn">Log In</button>
          <a href="/" className="forgot-password">Forgot Password?</a>
          <div className="divider"></div>
          <Link to="/signup">
            <button className="create-account-btn">Create New Account</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default LoginPage;