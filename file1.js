// JavaScript File 1 (file1.js)

const express = require('express');
const app = express();
const PORT = 3000;

// Home route displaying group names
app.get('/', (req, res) => {
    res.send('<h1>Team Members: Mahi Dharmeshkumar Patel, Neel Manishkumar Patel ,Pratham Ghanshyambhai Patel</h1>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});