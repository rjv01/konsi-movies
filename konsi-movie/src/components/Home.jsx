import React, { useState, useEffect } from 'react';
import '../index.css';
import axios from 'axios'; // API requests

export default function Home() {
  const [movies, setMovies] = useState([]);

  // Fetch movies when the component mounts
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get('http://localhost:3000/movies/api/all');
        const moviesWithReportCount = response.data.map((movie) => ({
          ...movie,
          reportCount: 5, //report count of 5
        }));
        setMovies(moviesWithReportCount); //  API returns an array of movies
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchMovies();
  }, []);

  const handleReport = async (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie._id === movieId) {
          if (movie.reportCount === 1) {
            reportMovie(movieId); // Call backend when reportCount reaches 0
            return null; // Remove movie from the list
          } else {
            return { ...movie, reportCount: movie.reportCount - 1 }; // Decrement reportCount
          }
        }
        return movie;
      }).filter(Boolean) // Remove null entries from the array
    );
  };

  const reportMovie = async (movieId) => {
    try {
      const response = await axios.post(`http://localhost:3000/movies/api/report/${movieId}`);
      console.log('Response from backend:', response.data);
    } catch (error) {
      console.error('Frontend Error reporting movie:', error);
    }
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center bgGrid">
      <h1 className="text-center text-3xl font-bold mb-10 text-white">Movie List</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie._id}
              className="relative text-white w-[400px] rounded-lg shadow-lg bg-black p-4 hover:shadow-2xl transition-shadow"
            >
              <div>
                <header className="text-xl font-bold mb-2">{movie.name}</header>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Review:</strong> {movie.review}</p>
                <p><strong>Rating:</strong> {movie.rating} / 5</p>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>About:</strong> {movie.about}</p>
                <p><strong>Your View:</strong> {movie.urview}</p>
                <p><strong>Reports Left:</strong> {movie.reportCount}</p>
                <button
                  className="text-red-600 p-3 hover:border rounded-full"
                  onClick={() => handleReport(movie._id)}
                >
                  Report
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No movies available</p>
        )}
      </div>
    </div>
  );
}
