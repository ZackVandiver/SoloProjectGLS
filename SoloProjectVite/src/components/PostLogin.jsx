import React, { useState } from 'react';
import UserCards from './UserCards'; // Adjust path as necessary
import '../App.css'; // Ensure this path points to your CSS

function PostLogin() {
  const [sortOption, setSortOption] = useState('cohort');

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div>
      <div className="top-container">
        {/* Content for the top of the page goes here. Adjust styling as needed. */}
        <div className="dropdown">
          <label htmlFor="sort">Sort By:</label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="cohort">Cohort</option>
            <option value="name">Name</option>
            <option value="random">Random</option> {/* Add "Random" option */}
          </select>
        </div>
      </div>
      <UserCards sortOption={sortOption} />
    </div>
  );
}

export default PostLogin;
