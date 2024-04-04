import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import userData from '../data/userData.js';
import '../App.css';
import githubLogo from '../assets/github-logo.png';
import linkedinLogo from '../assets/linkedin-logo.png';

const UserCards = ({ sortOption }) => {
  const [users, setUsers] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [visible, setVisible] = useState(20);

  useEffect(() => {
    const sortedUsers = [...userData].slice(0, visible);

    if (sortOption === 'random') {
      // Shuffle the users array for random sorting
      sortedUsers.sort(() => Math.random() - 0.5);
    } else {
      sortedUsers.sort((a, b) => {
        switch (sortOption) {
          case 'cohort':
            return b.cohort - a.cohort;
          case 'name':
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
    }

    setUsers(sortedUsers);
  }, [sortOption, visible]);

  const fetchMoreData = () => {
    if (users.length >= userData.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setVisible(prevVisible => prevVisible + 20);
    }, 1500);
  };

  return (
    <div className="scroll-container">
      <InfiniteScroll
        dataLength={users.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p style={{ textAlign: 'center' }}>All users loaded</p>}
        className="cards-container"
      >
        {users.map((user, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <h2>{user.name}</h2>
            </div>
            <div className="card-links">
              <a href={user.github} target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub" className="logo" />
              </a>
              {user.linkedin && (
                <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={linkedinLogo} alt="LinkedIn" className="logo" />
                </a>
              )}
            </div>
            <span className="card-cohort">{user.cohort}</span>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default UserCards;
