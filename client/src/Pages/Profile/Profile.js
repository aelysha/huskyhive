import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [profileName, setProfileName] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [interests, setInterests] = useState(['Coding', 'Music', 'Art']);
  const [organizations, setOrganizations] = useState(['Tech Club', 'Music Society']);
  const [newInterest, setNewInterest] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDemographicsOpen, setIsDemographicsOpen] = useState(false);

  const addInterest = () => {
    if (newInterest.trim() !== '') {
      setInterests([...interests, newInterest]);
      setNewInterest('');
    }
  };

  return (
    <div className="profile-setting">
      <div className="outer-box">
        {/* Left Side for Profile Picture and Interests */}
        <div className="picture-view">
          <h2 className="panel-title">Profile Name</h2>
          {/* Profile picture can be added here */}
          <div className="profile-picture">PFP</div>
          <div className="profile-section">
            <div
              className="profile-section-header"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <span>Interests</span>
              <span className={`arrow ${isProfileOpen ? 'open' : ''}`}>&#9662;</span>
            </div>
            {isProfileOpen && (
              <div className="profile-section-content">
                <div className="tag-list">
                  {interests.map((interest, index) => (
                    <span key={index} className="tag">
                      {interest}
                    </span>
                  ))}
                  {/* Dark Purple Button for Adding New Interest */}
                  <button
                    className="add-tag"
                    onClick={addInterest}
                  >
                    +
                  </button>
                  <input
                    type="text"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    placeholder="Add interest"
                    className="add-interest-input"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="profile-section">
            <div
              className="profile-section-header"
              onClick={() => setIsDemographicsOpen(!isDemographicsOpen)}
            >
              <span>Registered Organizations</span>
              <span className={`arrow ${isDemographicsOpen ? 'open' : ''}`}>&#9662;</span>
            </div>
            {isDemographicsOpen && (
              <div className="profile-section-content">
                <div className="tag-list">
                  {organizations.map((organization, index) => (
                    <span key={index} className="tag">
                      {organization}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side for Form Fields */}
        <div className="edit-view">
          <h2 className="panel-title">My Account</h2>

          {/* Profile Information Section with Text Input */}
          <div className="form-section">
            <div className="input-container">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
                placeholder="Enter your name"
                className="input-field"
              />
            </div>

            <div className="input-container">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input-field"
              />
            </div>
          </div>

          {/* Demographics Section with Text Input */}
          <div className="form-section">
            <div className="input-container">
              <label htmlFor="major">Major:</label>
              <input
                id="major"
                type="text"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                placeholder="Enter your major"
                className="input-field"
              />
            </div>
          </div>

          {/* Preferences Section */}
          <div className="form-section">
            <textarea
              placeholder="Enter your preferences here..."
              className="input-field"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
