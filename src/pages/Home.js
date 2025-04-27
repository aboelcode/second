import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <h1 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Welcome to Aboelcode</h1>
      <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
        A secure authentication system with email verification.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/register" className="btn">Sign Up</Link>
        <Link to="/login" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary-color)', border: '1px solid var(--primary-color)' }}>
          Login
        </Link>
      </div>
      
      <div style={{ marginTop: '5rem', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '2rem', maxWidth: '800px', margin: '5rem auto 0' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Secure Authentication</h3>
            <p>User credentials are securely stored using bcrypt hashing.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Email Verification</h3>
            <p>Verify your identity with a secure verification code sent to your email.</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>User Profiles</h3>
            <p>Manage your personal information from your secure profile page.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;