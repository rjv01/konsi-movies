import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Search from './Search';

export default function Navbar() {
  return (
    <div className="bg-slate-900 flex justify-between items-center p-1">
      {/* Logo Section */}
      <div>
        <Link to="/"><img src={Logo} alt="Img" className='w-24 h-auto rounded-full hover:bg-blue-500 duration-200'/></Link>
      </div>

      {/* Search Section */}
    <Search />
    {/* <div className="flex items-center bg-white text-slate-900 px-[5%] py-[1px] rounded-full shadow-md"> */}
    {/* <input
        type="text"
        placeholder="Search"
        className="outline-none text-slate-900 p-[1px] rounded-l-full w-[300px] text-2xl"
        // onChange={handleChange()}
    /> */}
    {/* <button className="p-3">
        <i className="fa-solid fa-magnifying-glass text-slate-900 text-2xl"></i>
    </button>
    </div> */}


      {/* Navigation Links */}
      <div className="flex space-x-4 text-[20px]">
        <Link
          to="/"
          className="text-white p-4 transition duration-300 hover:text-blue-400 hover:shadow-blueShadow"
        >
          Home
        </Link>
        <Link
          to="/aboutus"
          className="text-white p-4 transition duration-300 hover:text-blue-400 hover:shadow-blueShadow"
        >
          About Us
        </Link>
        <Link
          to="/post"
          className="text-white p-4 transition duration-300 hover:text-blue-400 hover:shadow-blueShadow"
        >
          Post
        </Link>
      </div>
    </div>
  );
}
