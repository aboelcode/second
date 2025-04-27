import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const Profile = ({ user }) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        // Use the user token to fetch profile data
        const data = await api.getProfile(user.token);
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError('Failed to load profile data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  if (loading) {
    return (
      <div className="profile-container" style={{ textAlign: 'center' }}>
        <h2>Loading profile...</h2>
        <div style={{ marginTop: '2rem' }}>
          <div className="spinner" style={{ 
            borderColor: 'rgba(74, 110, 224, 0.3)',
            borderTopColor: 'var(--primary-color)',
            width: '2rem',
            height: '2rem'
          }}></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-container">
        <h2 className="profile-header">Profile Error</h2>
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Your Profile</h2>
        <p>Welcome back, {profileData?.name || user.name}!</p>
      </div>

      <div className="profile-info">
        <p>
          <strong>Name:</strong> {profileData?.name || user.name}
        </p>
        <p>
          <strong>Email:</strong> {profileData?.email || user.email}
        </p>
        <p>
          <strong>Account Status:</strong>{' '}
          <span
            style={{
              color: profileData?.isVerified || user.isVerified 
                ? 'var(--success-color)' 
                : 'var(--error-color)',
            }}
          >
            {profileData?.isVerified || user.isVerified ? 'Verified' : 'Not Verified'}
          </span>
        </p>
        <p>
          <strong>Member Since:</strong>{' '}
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Account Security</h3>
        <p>
          Your account is protected with secure authentication. For additional
          security, we recommend using a strong, unique password and keeping your
          email verified.
        </p>
      </div>
    </div>
  );
};

export default Profile;