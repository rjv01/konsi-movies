import React, { useState, useEffect } from 'react';
import '../index.css';
import axios from 'axios'; // API requests

export default function Home() {
  const [movies, setMovies] = useState([]);

  // Fetch movies when the component mounts
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get('https://konsi-movie-backend-2.onrender.com/movies/api/all');
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
      const response = await axios.post(`https://konsi-movie-backend-2.onrender.com/movies/api/report/${movieId}`);
      console.log('Response from backend:', response.data);
    } catch (error) {
      console.error('Frontend Error reporting movie:', error);
    }
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center bgGrid">
      <h1 className="text-3xl font-bold mb-4 text-blue-400">Welcome to the Moive Review App</h1>
      <p className="text-lg text-center">Movie <span className='text-blue-800 text-2xl underline'>night</span> plans? Can't decide what to watch?</p>
      <p className="text-lg text-center"> <span className='text-blue-800 text-2xl underline'>Konsi-Movie</span> helps you find, review, and share your favorite movies and series!</p>

      <h1 className="text-center text-3xl font-bold mb-10 text-white">Movie List</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie._id}
              className="relative text-white w-[400px] rounded-lg shadow-lg bg-slate-900 p-4 hover:shadow-2xl transition-shadow"
            >
              <div>
                <header className="text-xl font-bold mb-2">{movie.name}</header>
                <p className='underline'><strong><span className='rounded-[15px] bg-blue-800'>Director:</span></strong> {movie.director}</p>
                <p className='underline'><strong><span className='rounded-[15px] bg-blue-800'>Rating:</span></strong> {movie.rating} / 5</p>
                <p className='underline'><strong><span className='rounded-[15px] bg-blue-800'>Genre:</span></strong> {movie.genre}</p>
                <p className='underline'><strong><span className='rounded-[15px] bg-blue-800'>About:</span></strong> {movie.about}</p>
                <p className='underline'><strong><span className='rounded-[15px] bg-blue-800'>Your View:</span></strong> {movie.urview}</p>
                <p className='underline'><strong><span className='rounded-[15px] bg-blue-800'>Reports Left:</span></strong> {movie.reportCount}</p>
                {/* <button
                  className="text-red-600 p-3 hover:border rounded-full"
                  onClick={() => handleReport(movie._id)}
                >
                  Report
                </button> */}
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center mt-10">
            <p className="text-gray-600 text-lg">Loading, Please Wait...</p>
            <i className="fa-solid fa-gear text-6xl animate-spin mt-4"></i>
          </div>
        )}
      </div>
    </div>
  );
}
