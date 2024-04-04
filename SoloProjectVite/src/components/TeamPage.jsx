import React, { useState, useEffect } from 'react';
import TeamCard from '../data/teamCard'; 
import '../App.css';

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);

  // Fetch team data from API or database
  useEffect(() => {
    // Example fetch request
    fetch('http://localhost:3001/api/teams')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="teams-page-container">
      <h1>Teams</h1>
      <div className="teams-container">
        {teams.map(team => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
