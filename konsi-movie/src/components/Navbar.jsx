// import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../assets/Logo.png';
// import Search from './Search';

// export default function Navbar() {
//   return (
//     <div className="bg-slate-900 flex justify-between items-center p-1">
//       {/* Logo Section */}
//       <div>
//         <Link to="/"><img src={Logo} alt="Img" className='w-24 h-auto rounded-full hover:bg-blue-500 duration-200'/></Link>
//       </div>

//       {/* Search Section */}
//       <Search />

//       {/* Navigation Links */}
//       <div className="flex space-x-4 text-[20px]">
//         <Link
//           to="/"
//           className="text-white p-4 transition duration-300 hover:text-blue-400 hover:shadow-blueShadow"
//         >
//           Home
//         </Link>
//         <Link
//           to="/aboutus"
//           className="text-white p-4 transition duration-300 hover:text-blue-400 hover:shadow-blueShadow"
//         >
//           About Us
//         </Link>
//         <Link
//           to="/post"
//           className="text-white p-4 transition duration-300 hover:text-blue-400 hover:shadow-blueShadow"
//         >
//           Post
//         </Link>
//         <Link
//           to="/login"
//           className="text-white p-4 transition duration-300 hover:text-blue-400 hover:shadow-blueShadow"
//         >
//           Login
//         </Link>
//         <Link
//           to="/register"
//           className="text-white p-4 transition duration-300 hover:text-blue-400 hover:shadow-blueShadow"
//         >
//           Register
//         </Link>
//       </div>
//     </div>
//   );
// }


//new raj
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Search from './Search';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    alert('Logged out successfully');
    navigate('/');
  };

  const handlePostClick = () => {
    if (!isLoggedIn) {
      alert("Please log in to create a post.");
      navigate("/login");
    }
  };

  return (
    <div className="bg-slate-900 flex justify-between items-center p-1">
      <div>
        <Link to="/">
          <img
            src={Logo}
            alt="Img"
            className="w-24 h-auto rounded-full hover:bg-blue-500 duration-200"
          />
        </Link>
      </div>

      <Search />

      <div className="flex space-x-4 text-[20px]">
        <Link to="/" className="text-white p-4 hover:text-blue-400">Home</Link>
        <Link to="/aboutus" className="text-white p-4 hover:text-blue-400">About Us</Link>

        {isLoggedIn ? (
          <>
            <Link
              to="/post"
              className="text-white p-4 hover:text-blue-400"
              onClick={handlePostClick}
            >
              Post
            </Link>
            <button
              onClick={handleLogout}
              className="text-white p-4 hover:text-red-400"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white p-4 hover:text-blue-400">Login</Link>
            <Link to="/register" className="text-white p-4 hover:text-blue-400">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}
