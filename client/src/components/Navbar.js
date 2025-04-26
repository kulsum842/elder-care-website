import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <header className="navbar" role="banner">
      <div className="top-bar">
        <a href="/" aria-label="Go to Home page" className="logo-link">
          <h1 className="logo" aria-label="Home Alone Logo">HOME ALONE</h1>
        </a>

        <nav className="auth-links" aria-label="Authentication Links">
          {user ? (
            <>
              <span className="username">{user.name}</span>
              <span aria-hidden="true">|</span>
              <button onClick={handleLogout} className="logout-button">LOGOUT</button>
            </>
          ) : (
            <>
              <a href="/login">LOGIN</a>
              <span aria-hidden="true">|</span>
              <a href="/register">REGISTER</a>
            </>
          )}
        </nav>
      </div>

      <nav className="bottom-bar" aria-label="Main Navigation">
        <a href="/">HOME</a>
        <a href="/features">FEATURES</a>
        <a href="/membership">MEMBERSHIP</a>
        <a href="/contact">CONTACT</a>
      </nav>
    </header>
  );
};

export default Navbar;
