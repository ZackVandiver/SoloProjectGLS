import React, { useState } from 'react';
import UserCards from './UserCards'; // Adjust path as necessary
import '../App.css'; // Ensure this path points to your CSS

const PostLogin = () => {
  const [sortOption, setSortOption] = useState('cohort');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="post-login-container">
      <div className="company-name">Group Genius</div>
      <div className="description">Get Linked, Git Projects, GG.</div>
      <div className="sort-dropdown-container">
        <label htmlFor="sort"></label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="cohort">Descending</option>
          {/* <option value="name">Name</option> */}
          <option value="random">Random</option>
        </select>
      </div>
      <div className="dropdown-menu">
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {showDropdown && (
          <ul className="dropdown-options">
            <li>Edit Profile</li>
            <li>View Teams</li>
            <li>Log Out</li>
          </ul>
        )}
      </div>
      <UserCards sortOption={sortOption} />
    </div>
  );
};

export default PostLogin;
