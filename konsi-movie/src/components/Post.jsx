import React, { useState } from 'react';
import axios from 'axios';

export default function Post() {
  const [formData, setFormData] = useState({
    name: '',
    director: '',
    rating: '',
    genre: '',
    about: '',
    urview: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim all values
    const trimmedData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, value.trim()])
    );

    // Check for empty values
    const emptyFields = Object.values(trimmedData).some((val) => val === '');
    if (emptyFields) {
      alert('❗ Please fill in all required fields.');
      return;
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/movies/api/posting`,
        trimmedData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      alert('✅ Movie posted successfully!');
      setFormData({
        name: '',
        director: '',
        rating: '',
        genre: '',
        about: '',
        urview: '',
      });
    } catch (error) {
      const errMsg = error.response?.data?.message || error.message;
      alert('❌ ' + errMsg);
      console.error('❌ Error posting movie:', error);
    }
  };

  return (
    <div className="min-h-screen text-white bgGrid flex flex-col items-center p-6">
      <div className="text-center mb-8 text-blue-400">
        <h1 className="text-4xl font-bold mb-2">Post Your Review</h1>
        <p className="text-lg">Share your thoughts on a movie or series!</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-blue-400 text-black p-6 rounded-lg shadow-lg w-full max-w-xl space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Movie/Series Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="director"
          placeholder="Director Name"
          value={formData.director}
          onChange={handleInputChange}
          className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="rating"
          placeholder="Rating (out of 5)"
          value={formData.rating}
          onChange={handleInputChange}
          className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleInputChange}
          className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <textarea
          name="about"
          placeholder="About the Movie/Series"
          value={formData.about}
          onChange={handleInputChange}
          className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          rows="4"
        />
        <textarea
          name="urview"
          placeholder="Your View (What You Liked)"
          value={formData.urview}
          onChange={handleInputChange}
          className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          rows="4"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-800 transition duration-300"
        >
          Post
        </button>
      </form>
    </div>
  );
}
