import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../utils/api';

const Verify = ({ onLogin }) => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Create refs for each input
  const inputRefs = [
    useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null)
  ];
  
  useEffect(() => {
    // Get email from location state (from redirect)
    if (location.state?.email) {
      setEmail(location.state.email);
    } else {
      // If no email in state, redirect to login
      navigate('/login');
    }
    
    // Focus first input on load
    if (inputRefs[0].current) {
      inputRefs[0].current.focus();
    }
  }, [location, navigate]);
  
  const handleCodeChange = (index, value) => {
    // Only allow digits
    if (value && !/^\d+$/.test(value)) return;
    
    // Update the code array
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
    
    // Auto-focus to next input if this one is filled
    if (value && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };
  
  const handleKeyDown = (index, e) => {
    // Handle backspace to go back to previous input
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };
  
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    
    // Only process if it looks like a verification code
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split('');
      setVerificationCode(digits);
      
      // Focus the last input
      inputRefs[5].current.focus();
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    setError('');
    setSuccess('');
    
    // Check if all digits are filled
    if (verificationCode.some(digit => !digit)) {
      setError('Please enter all digits of the verification code');
      return;
    }
    
    try {
      setLoading(true);
      
      // Combine digits into a single code
      const code = verificationCode.join('');
      
      // Verify the code
      const response = await api.verifyEmail({ email, code });
      
      setSuccess('Email verified successfully!');
      
      // Login the user
      onLogin(response);
      
      // Redirect to profile after a short delay
      setTimeout(() => {
        navigate('/profile');
      }, 1500);
      
    } catch (error) {
      setError(
        error.response?.data?.message || 
        'Verification failed. Please check your code and try again.'
      );
    } finally {
      setLoading(false);
    }
  };
  
  const handleResendCode = async () => {
    try {
      setResendLoading(true);
      setError('');
      
      await api.resendVerificationCode(email);
      
      setSuccess('A new verification code has been sent to your email');
      
      // Clear inputs
      setVerificationCode(['', '', '', '', '', '']);
      
      // Focus first input
      inputRefs[0].current.focus();
      
    } catch (error) {
      setError(
        error.response?.data?.message || 
        'Failed to resend code. Please try again.'
      );
    } finally {
      setResendLoading(false);
    }
  };
  
  return (
    <div className="form-container">
      <h2 className="form-title">Verify Your Email</h2>
      
      <p className="text-center mb-2">
        We've sent a 6-digit verification code to <strong>{email}</strong>
      </p>
      
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="verification-code">
          {verificationCode.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              className="verification-input"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : null}
            />
          ))}
        </div>
        
        <button 
          type="submit" 
          className={`btn btn-block ${loading ? 'btn-loading' : ''}`}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              <span>Verifying...</span>
            </>
          ) : (
            'Verify Email'
          )}
        </button>
      </form>
      
      <div className="text-center mt-3">
        <p>Didn't receive the code?</p>
        <button 
          onClick={handleResendCode} 
          className="btn"
          style={{ 
            backgroundColor: 'transparent', 
            color: 'var(--primary-color)',
            border: 'none',
            padding: '0.5rem' 
          }}
          disabled={resendLoading}
        >
          {resendLoading ? 'Sending...' : 'Resend Code'}
        </button>
      </div>
    </div>
  );
};

export default Verify;