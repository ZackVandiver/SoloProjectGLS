import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import { connectDB } from './database.js';
import User from './src/models/User.js'; // Adjust the path as necessary

const app = express();
const PORT = 3001; // Port can be any number that suits your configuration

app.use(cors({ origin: 'http://localhost:3000' })); // Allowing access from your React app
app.use(express.json()); // Middleware for parsing JSON bodies

// Establish database connection
connectDB();

// User registration endpoint
app.post('/api/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating user');
    }
});

// Test route to confirm the server is running
app.get('/', (req, res) => {
    console.log('Test route accessed');
    res.send('Express server is running!');
});

// Mock login endpoint - Replace with actual logic later
// app.post('/api/login', (req, res) => {
//     const { username, password } = req.body;
//     // This is a placeholder. Implement actual user authentication logic here.
//     const mockUsername = 'user';
//     const mockPassword = 'pass';

//     if (username === mockUsername && password === mockPassword) {
//         res.json({ message: "Login successful!" });
//     } else {
//         res.status(401).json({ message: "Login failed: Incorrect username or password." });
//     }
// });

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Login failed: Incorrect username or password." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Login failed: Incorrect username or password." });
        }

        // If the password matches, proceed with login logic
        res.json({ message: "Login successful", user: { username: user.username } }); // Adjust according to your needs
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});


app.get('/api/users', async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
