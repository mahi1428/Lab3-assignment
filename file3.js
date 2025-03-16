// Importing required modules
const express = require('express'); // Express framework to create the API
const fs = require('fs'); // File system module to read/write JSON file
const app = express(); // Creating an instance of Express
const PORT = 3000; // Defining the port on which the server will run

// Middleware to parse incoming JSON requests
app.use(express.json());

// Path to the JSON file containing movie data
const moviesFile = './data/movies.json';

// Function to read movies from the JSON file
const readMovies = () => {
    return JSON.parse(fs.readFileSync(moviesFile, 'utf-8'));
};

// Function to write updated movie data back to the JSON file
const writeMovies = (movies) => {
    fs.writeFileSync(moviesFile, JSON.stringify(movies, null, 2));
};

// Load movie data when the server starts
let movies = readMovies();

/**
 *  Create (POST) - Add a new movie
 * API Endpoint: POST /movies
 * Description: Adds a new movie to the JSON file
 */
app.post('/movies', (req, res) => {
    const { title, director, year, genre } = req.body; // Extract movie details from request body

    // Validate that all required fields are provided
    if (!title || !director || !year || !genre) {
        return res.status(400).json({ message: "All movie fields (title, director, year, genre) are required!" });
    }

    // Creating a new movie object with a unique ID
    const newMovie = {
        id: movies.length > 0 ? movies[movies.length - 1].id + 1 : 1, // Assign unique ID
        title,
        director,
        year,
        genre
    };

    // Adding the new movie to the movies array
    movies.push(newMovie);
    writeMovies(movies); // Save updated movies list to JSON file

    // Sending response with success message and the new movie object
    res.status(201).json({ message: 'Movie added successfully!', newMovie });
});

/**
 *  Update (PUT) - Update a movie by ID
 * API Endpoint: PUT /movies/:id
 * Description: Updates the details of an existing movie
 */
app.put('/movies/:id', (req, res) => {
    const movieId = parseInt(req.params.id); // Extract movie ID from URL
    const movieIndex = movies.findIndex(m => m.id === movieId); // Find movie in the list

    // If movie not found, return error response
    if (movieIndex === -1) {
        return res.status(404).json({ message: 'Movie not found' });
    }

    // Updating the movie with new details
    movies[movieIndex] = { ...movies[movieIndex], ...req.body };
    writeMovies(movies); // Save updated movies list to JSON file

    // Sending response with success message and updated movie details
    res.json({ message: 'Movie updated successfully!', updatedMovie: movies[movieIndex] });
});

/**
 * Delete (DELETE) - Remove a movie by ID
 * API Endpoint: DELETE /movies/:id
 * Description: Deletes a movie from the list by its ID
 */
app.delete('/movies/:id', (req, res) => {
    const movieId = parseInt(req.params.id); // Extract movie ID from URL
    const filteredMovies = movies.filter(m => m.id !== movieId); // Remove movie from list

    // If no movie was removed, it means the movie ID was not found
    if (filteredMovies.length === movies.length) {
        return res.status(404).json({ message: 'Movie not found' });
    }

    // Updating the movies array and writing to JSON file
    movies = filteredMovies;
    writeMovies(movies);

    // Sending response with success message
    res.json({ message: 'Movie deleted successfully!' });
});

/**
 *  Start the server
 * Description: Runs the Express server on the defined port
 */
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
