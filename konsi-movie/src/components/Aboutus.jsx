import React from 'react';

export default function Aboutus() {
  return (
    <div className="min-h-screen text-white bg-blue-400 flex flex-col items-center p-6 ">
      {/* Who we are Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
        <p className="text-lg">We are a team passionate about providing excellent services. Our platform connects customers with servicemen for home maintenance tasks.</p>
      </div>

      {/* Form Section */}
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Tell Us More</h2>
        <form action="" method="post" className="space-y-4">
          <input 
            type="text" 
            placeholder="Title" 
            className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <textarea 
            placeholder="Tell me more about it" 
            className="w-full p-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            rows="4"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="mt-8 text-center">
        <p>If you have any questions, feel free to contact us at <a href="verma.rajshekhar1@gmail.com" className="text-blue-600">verma.rajshekhar1@gmail.com</a></p>
      </div>
    </div>
  );
}
