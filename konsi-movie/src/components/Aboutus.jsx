import React, { useState } from 'react';
import axios from 'axios';

export default function Aboutus() {
  const [formData, setFormData] = useState({ title: '', message: '' });

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const { title, message } = formData;

  //   if (!title || !message) {
  //     alert('Please fill in all required fields');
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/movies/api/message`, { // Fixed URL
  //       title,
  //       message, // Ensure field name matches schema
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     alert('Message posted successfully');
  //     console.log('Message posted successfully:', response.data);
  //   } catch (error) {
  //     console.error('Error posting message:', error.response?.data || error.message);
  //   }
  // };

  // // Handle input changes
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Trim inputs before validation
    const trimmedData = {
      title: formData.title?.trim(),
      message: formData.message?.trim(),
    };
  
    const { title, message } = trimmedData;
  
    // Validate trimmed data
    if (!title || !message) {
      alert('Please fill in all required fields');
      return;
    }
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/movies/api/message`,
        { title, message },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      alert('Message posted successfully');
      // console.log('Message posted successfully:', response.data);
  
      // Reset form after successful submission
      setFormData({ title: '', message: '' });
    } catch (error) {
      console.error('Error posting message:', error.response?.data || error.message);
    }
  };
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  return (
    <div className="min-h-screen text-white bgGrid flex flex-col items-center p-6">
      {/* Who we are Section */}
      <div className="text-center mb-8 text-blue-400">
        <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
        <p className="text-lg">We are a team passionate about providing excellent services.</p>
        <p className="text-lg">If you have any issues, feel free to contact us!</p>
      </div>

      {/* Form Section */}
      <div className="bg-blue-400 text-black p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">Tell Us More</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title" // Bind name to state
            placeholder="Title, Name"
            value={formData.title} // Controlled input
            onChange={handleInputChange} // Handle changes
            className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="message" // Bind name to state
            placeholder="Tell me more about it"
            value={formData.message} // Controlled input
            onChange={handleInputChange} // Handle changes
            className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            rows="4"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-800 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="mt-8 text-center text-blue-400">
        <p>If you have any questions, feel free to contact us at <a href="mailto:verma.rajshekhar1@gmail.com" className="text-blue-600 text-lg underline">verma.rajshekhar1@gmail.com</a></p>
      </div>
    </div>
  );
}
