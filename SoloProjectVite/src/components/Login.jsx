import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    console.log('event handleSubmit', username, password) // Temp logging for demo
    // Make an HTTP Post req to the backend
    // const { username, password } = response;
    
//     try {
//         const response = await fetch('http://localhost:3001/api/login', { // backend api endpoint
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password })
//         });

//         const data = await response.json();

//         if (response.ok) {
//             console.log('Login Successful', data);
//             navigate('/post-login'); // redirects to post-login page upon success
        
//         } else {
//             // handle errors
//             console.log('Login failed', data.message)
//         }
//     } catch (error) {
//         console.error('Login error', error)
//     }
// }

e.preventDefault(); // Prevents the default form submission behavior

try {
    // Using axios to send a POST request
    const response = await axios.post('http://localhost:3001/api/login', {
        username, // shorthand for username: username
        password, // shorthand for password: password
    });

    // With axios, response.data directly contains the response body
    console.log('Login Successful', response.data);
    navigate('/post-login'); // Redirects to post-login page upon success
} catch (error) {
    // Axios wraps errors in an `error.response` object
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('Login failed', error.response.data.message);
        console.error('Login error', error.response.status, error.response.data);
    } else if (error.request) {
        // The request was made but no response was received
        console.log('Login failed. No response from the server.');
        console.error('Login error', error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
    }
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