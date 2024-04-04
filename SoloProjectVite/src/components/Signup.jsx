import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to navigate user after successful signup

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3001/api/register', { // Change this URL to match your backend endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            console.log('Signup Successful');
            navigate('/login'); // Redirect user to login page upon successful signup
        } else {
            console.log('Signup Failed');
            // Handle errors (e.g., display an error message)
            // You might want to parse the response JSON and display the error message from the server
        }
    } catch (error) {
        console.error('Signup error:', error);
        // Handle the error (e.g., display an error message)
    }
  };

  return (
    <div className="signup-container" style={{ backgroundColor: '#FFF9C4', padding: '20px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
}

export default Signup;

