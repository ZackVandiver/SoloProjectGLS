import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3001; // different than react port

app.use(cors(
    {origin: 'http://localhost:3000' // Allow only this origin to access
}
));

app.use(express.json());

// Test route
app.get('/', (req, res) => {
    console.log('test in terminal')
    res.send('Express server is running!');
});

// Login route
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // example of mock crednetials
    const mockUsername = 'user';
    const mockPassword = 'pass';

    if (username === mockUsername && password === mockPassword) {
        res.json({message: "Login successful!"});
    } else {
        res.status(401).json({ message: "Login failed: Incorrect username or password."});
    }

    // console.log(`Login attempt with username ${username}, password ${password}`);
    // // Implement login logic here. For now, respond with a simple message.
    // res.json({ message: "Login succesful!"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});