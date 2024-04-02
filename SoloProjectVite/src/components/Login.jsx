import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
// state and functions go here
/*  Use the useState hook to create state variables for username and password.
    Initialize them with empty strings since they will be updated with user input.
*/
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

// React router hook for navigation
const navigate = useNavigate();


// Handle Form Submit
async function handleSubmit (e) {
    e.preventDefault(); // prevents the default form submission behavior
    // here will later add logic to send data to the backend
    console.log(username, password) // Temp logging for demo
    // Make an HTTP Post req to the backend
    try {
        const response = await fetch('/api/login', { // backend api endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Login Successful', data);
            navigate('/post-login'); // redirects to post-login page upon success
        
        } else {
            // handle errors
            console.log('Login failed', data.message)
        }
    } catch (error) {
        console.error('Login error', error)
    }
}

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                {/* Input fields and submit button will go here, bind the input fields to your state variables using the value attribute and update the state on onChange events. */}
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

                <button type="submit">Login</button>
            </form>
        </div>
    );
}


export default Login;