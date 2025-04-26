import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!emailOrUsername || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Fake validation
    if (emailOrUsername !== 'user@example.com' || password !== 'password123') {
      setError('Invalid credentials.');
    } else {
      setError('');
      alert('Login successful!');
    }
  };

  const handleGoogleLogin = () => {
    alert('Redirect to Google OAuth');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        {error && <div className="error-message">{error}</div>}

        <label htmlFor="emailOrUsername">Username or Email</label>
        <input
          type="text"
          id="emailOrUsername"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          placeholder="you@example.com"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />

        <div className="form-options">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </label>
          <a href="/forgot-password" className="forgot-link">Forgot Password?</a>
        </div>

        <button type="submit" className="login-button">Login</button>

        <div className="divider">or</div>

        <button type="button" className="google-button" onClick={handleGoogleLogin}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
          Continue with Google
        </button>

        <p className="register-link">
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
