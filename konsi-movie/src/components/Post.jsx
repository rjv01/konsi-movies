import React, { useState } from 'react';
import axios from 'axios';

export default function Post() {
  const [formData, setFormData] = useState({
    name: '',
    director: '',
    rating: '',
    genre: '',
    about: '',
    urview: ''
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, director, rating, genre, about, urview } = formData;
  
    if (!name || !director || !rating || !genre || !about || !urview) {
      alert('Please fill in all required fields.');
      return;
    }
  
    try {
      const response = await axios.post('https://konsi-movie-backend-2.onrender.com/movies/api/posting', {
        name,
        director,
        rating,
        genre,
        about,
        urview,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('Movie posted successfully:');
      console.log('Movie posted successfully:', response.data);
    } catch (error) {
      console.error('Error posting movie:', error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center text-center bgGrid">
      <form onSubmit={handleSubmit} className="p-6 bg-blue-400 rounded-lg shadow-lg w-[500px]">
      <h1 className="text-3xl font-bold mb-4 text-white">Add your own review</h1>
        {/* <header className="text-2xl font-bold mb-4 text-slate-900">
          Post Your Movies/Series Detail
        </header> */}
        <input
          type="text"
          name="name"
          placeholder="Movie/Series's Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="director"
          placeholder="Director's Name"
          value={formData.director}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="rating"
          placeholder="Rating (out of 5)"
          value={formData.rating}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <textarea
          name="about"
          placeholder="About the Movie or Series"
          value={formData.about}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded h-24 resize-none"
          required
        />
        <textarea
          name="urview"
          placeholder="Your View (What You Liked)"
          value={formData.urview}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded h-24 resize-none"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded shadow-md hover:bg-blue-800 transition"
        >
          Post
        </button>
      </form>
    </div>
  );
}
