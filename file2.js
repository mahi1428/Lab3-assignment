const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Read JSON file
const movies = JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'));

// Route to display JSON data
app.get('/movies', (req, res) => {
    res.json(movies);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/movies`);
});