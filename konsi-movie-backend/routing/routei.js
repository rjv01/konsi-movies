
const express = require('express');
const router = express.Router();
const Movie = require('../schema/schemas');
const ReportedMovie = require('../schema/reportedMovieSchema'); 

// Example route for testing
router.get('/api/ok', async (req, res) => {
  res.send("ok working");
});

// GET route for fetching all movies
router.get('/api/all', async (req, res) => {
  try {
    const movies = await Movie.find(); // Fetch all movies from the database
    res.status(200).json(movies); // Return movies as JSON response
  } catch (err) {
    res.status(500).json({ message: 'Error fetching movies' });
  }
});

// POST route for posting a new movie
router.post('/api/posting', async (req, res) => {
  try {
    const { name, director, review, rating, genre, about, urview } = req.body;

    // Ensure all required fields are present
    if (!name || !director || !rating || !genre || !about || !urview) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    const newMovie = new Movie({
      name,
      director,
      review,
      rating,
      genre,
      about,
      urview,
    });

    await newMovie.save();
    res.status(201).json({ message: 'Movie posted successfully', movie: newMovie });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error posting movie' });
  }
});

// PUT route for updating a movie
router.put('/api/update/:id', async (req, res) => {
  try {
    const movieId = req.params.id;  // Get movie ID from URL parameters
    const { name, director, review, rating, genre, about, urview } = req.body;

    const updatedMovie = await Movie.findByIdAndUpdate(
      movieId,  // Find the movie by ID
      { name, director, review, rating, genre, about, urview },  // Fields to update
      { new: true }  // Return the updated document
    );

    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(200).json({ message: 'Movie updated successfully', movie: updatedMovie });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating movie' });
  }
});

// DELETE route for deleting a movie
router.delete('/api/delete/:id', async (req, res) => {
  try {
    const movieId = req.params.id;  // Get movie ID from URL parameters

    const deletedMovie = await Movie.findByIdAndDelete(movieId);

    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(200).json({ message: 'Movie deleted successfully', movie: deletedMovie });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting movie' });
  }
});

// Route to report a movie
router.post('/api/report/:id', async (req, res) => {
  const movieId = req.params.id;
  console.log("debugging from backend checking if id reached here or not",movieId);
  try {
    // Find the movie in the Movie collection
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    // Remove the movie from the Movie collection
    await Movie.findByIdAndDelete(movieId);

    // Add the movie to the ReportedMovies collection
    const reportedMovie = new ReportedMovie({
      name: movie.name,
      director: movie.director,
      review: movie.review,
      rating: movie.rating,
      genre: movie.genre,
      about: movie.about,
      urview: movie.urview,
      reported: true, // Mark as reported
    });

    // Save the reported movie
    await reportedMovie.save();

    res.json({ message: 'Movie reported and moved to ReportedMovies', isReported: true });
  } catch (error) {
    console.error('Backend Error reporting movie:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;
