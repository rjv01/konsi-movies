// import React, { useState } from 'react';
// import axios from 'axios';

// export default function Post() {
//   const [formData, setFormData] = useState({
//     name: '',
//     director: '',
//     rating: '',
//     genre: '',
//     about: '',
//     urview: '',
//     // imgurl: ''
//   });

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };


//   // Handle form submission
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
  
//   //   const { name, director, rating, genre, about, urview } = formData;
  
//   //   if (!name || !director || !rating || !genre || !about || !urview) {
//   //     alert('Please fill in all required fields.');
//   //     return;
//   //   }
  
//   //   try {
//   //     const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/movies/api/posting`, {
//   //       name,
//   //       director,
//   //       rating,
//   //       genre,
//   //       about,
//   //       urview,
//   //     }, {
//   //       headers: {
//   //         'Content-Type': 'application/json'
//   //       }
//   //     });
//   //     alert('Movie posted successfully:');
//   //     console.log('Movie posted successfully:', response.data);
//   //   } catch (error) {
//   //     console.error('Error posting movie:', error.response?.data || error.message);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const { name, director, rating, genre, about, urview } = formData;
  
//     // Trim each field to remove extra spaces
//     const trimmedData = {
//       name: name.trim(),
//       director: director.trim(),
//       rating: rating.trim(),
//       genre: genre.trim(),
//       about: about.trim(),
//       urview: urview.trim(),
//     };
  
//     // Frontend validation
//     if (
//       !trimmedData.name ||
//       !trimmedData.director ||
//       !trimmedData.rating ||
//       !trimmedData.genre ||
//       !trimmedData.about ||
//       !trimmedData.urview
//     ) {
//       alert('Please fill in all required fields.');
//       return;
//     }
  
//     try {
//       const response = await axios.post(
//         `${import.meta.env.VITE_BACKEND_URL}/movies/api/posting`,
//         trimmedData,
//         {
//           headers: { 'Content-Type': 'application/json' },
//         }
//       );
//       // const data = await response.json();
//       console.log("frontend data:1","movies posting");
  
//       alert('Movie posted successfully');
//       // console.log('Movie posted successfully:', response.data);
  
//       // Reset form after successful submission
//       setFormData({
//         name: '',
//         director: '',
//         rating: '',
//         genre: '',
//         about: '',
//         urview: '',
//         // imgurl: '',
//       });
//     } catch (error) {
//       console.error('Error posting movie:', error.response?.data || error.message);
//       console.log("frontend data:2 ",name,director,rating,genre,about,urview);
//     }
//   };
  

//   return (
//     <div className="min-h-screen flex justify-center items-center text-center bgGrid">
//       <form onSubmit={handleSubmit} className="p-6 bg-blue-400 rounded-lg shadow-lg w-[500px]">
//       <h1 className="text-3xl font-bold mb-4 text-white">Add your own review</h1>
//         {/* <header className="text-2xl font-bold mb-4 text-slate-900">
//           Post Your Movies/Series Detail
//         </header> */}
//         <input
//           type="text"
//           name="name"
//           placeholder="Movie/Series's Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full mb-4 p-2 border rounded"
//           required
//         />
//         <p>working</p>
//         <input
//           type="text"
//           name="director"
//           placeholder="Director's Name"
//           value={formData.director}
//           onChange={handleChange}
//           className="w-full mb-4 p-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="rating"
//           placeholder="Rating (out of 5)"
//           value={formData.rating}
//           onChange={handleChange}
//           className="w-full mb-4 p-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           name="genre"
//           placeholder="Genre"
//           value={formData.genre}
//           onChange={handleChange}
//           className="w-full mb-4 p-2 border rounded"
//           required
//         />
//         <textarea
//           name="about"
//           placeholder="About the Movie or Series"
//           value={formData.about}
//           onChange={handleChange}
//           className="w-full mb-4 p-2 border rounded h-24 resize-none"
//           required
//         />
//         <textarea
//           name="urview"
//           placeholder="Your View (What You Liked)"
//           value={formData.urview}
//           onChange={handleChange}
//           className="w-full mb-4 p-2 border rounded h-24 resize-none"
//           required
//         />
//         {/* <input
//           name="imgurl"
//           type="text"
//           className="w-full mb-4 p-2 border rounded"
//           value={formData.imgurl}
//           onChange={handleChange} */}
//           {/* // placeholder='Enter Image Url'/> */}
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded shadow-md hover:bg-blue-800 transition"
//         >
//           Post
//         </button>
//       </form>
//     </div>
//   );
// }


//new raj
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

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Trim inputs
  //   const trimmedData = {
  //     name: formData.name?.trim(),
  //     director: formData.director?.trim(),
  //     rating: formData.rating?.trim(),
  //     genre: formData.genre?.trim(),
  //     about: formData.about?.trim(),
  //     urview: formData.urview?.trim(),
  //   };

  //   const { name, director, rating, genre, about, urview } = trimmedData;

  //   // Validate
  //   if (!name || !director || !rating || !genre || !about || !urview) {
  //     alert('Please fill in all required fields.');
  //     return;
  //   }

  //   try {
  //     await axios.post(
  //       `${import.meta.env.VITE_BACKEND_URL}/movies/api/posting`,
  //       trimmedData,
  //       { 
  //         headers: { 
  //           'Content-Type': 'application/json' 
  //         },
  //       }
  //     );

  //     alert('Movie posted successfully!');
  //     setFormData({
  //       name: '',
  //       director: '',
  //       rating: '',
  //       genre: '',
  //       about: '',
  //       urview: '',
  //     });
  //   } catch (error) {
  //     const errMsg = error.response?.data?.message || error.message;
  //     alert("❌ " + errMsg);
  //     console.error('❌ Error posting movie:', error);
  //   }
  // };

  //new 
  const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, director, rating, genre, about, urview } = formData;

  // Simple required check
  if (!name || !director || !rating || !genre || !about || !urview) {
    alert('Please fill in all required fields.');
    return;
  }

  try {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/movies/api/posting`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    alert('Movie posted successfully!');
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
    alert("❌ " + errMsg);
    console.error('❌ Error posting movie:', error);
  }
};


  return (
    <div className="min-h-screen text-white bgGrid flex flex-col items-center p-6">
      <div className="text-center mb-8 text-blue-400">
        <h1 className="text-4xl font-bold mb-4">Post Your Review</h1>
        <p className="text-lg">Share your thoughts on a movie or series you watched!</p>
      </div>

      <div className="bg-blue-400 text-black p-6 rounded-lg shadow-lg w-full max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
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
    </div>
  );
}
