import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">Aboelcode</Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            {user ? (
              <>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={onLogout}>Logout</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;