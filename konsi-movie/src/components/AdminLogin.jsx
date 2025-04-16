import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) navigate('/');
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    const trimmedData = {
      email: email.trim(),
      password: password.trim(),
    };

    if (!trimmedData.email || !trimmedData.password) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/api/login`,
        {
          email: trimmedData.email,
          password: trimmedData.password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      const { token } = response.data;

      localStorage.setItem('token', token);

      window.location.reload();

      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log('Error in login:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Login failed.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bgGrid flex flex-col justify-center items-center text-center">
    <h1 className='text-3xl font-bold mb-4 text-blue-500'>Login Page</h1>
      <div className='m-2 p-2'>
        <form
          className='p-6 bg-blue-400 rounded-lg shadow-lg w-[500px]' 
          onSubmit={handleSubmit} method="post">
          {/* <h1>Working ON UI</h1> */}
          <div>
            <h1 className='mb-2 text-2xl'>Enter Email</h1>
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
            />
            <h1 className='mb-2 text-2xl'>Enter Password</h1>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
            />
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded shadow-md hover:bg-blue-800 transition"
              type="submit">Login</button>
          </div>
          <div className=''>
              <p className="mt-2 text-lg">
                  Don't have an account? 
                  <Link to="/register" className="text-white underline hover:text-black ml-2 duration-200">
                      Register Here
                  </Link>
              </p>
          </div>
        </form>
      </div>
    </div>
  );
}
