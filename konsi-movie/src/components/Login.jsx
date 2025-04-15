// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//     const [formData,setFormData] = useState({
//         email:"",
//         password:"",
//     });

//     const navigate = useNavigate();

//     useEffect(()=>{
//         const token = localStorage.getItem("token");
//         if(token)
//             navigate("/");
//     },[navigate])

//     const handleSubmit = async(e)=>{
//         e.preventDefault();

//         const {email,password} = formData;
//         const trimmedData = {
//             email:email.trim(),
//             password:password.trim(),
//         };

//         if(!trimmedData.email || !trimmedData.password){
//             alert("Please fill in all required fields");
//             return ;
//         }

//         try{
//             const response = await axios.post("http://localhost:3000/users/api/login", {
//                 email: trimmedData.email,
//                 password: trimmedData.password,
//             }, {
//                 headers: { "Content-Type": "application/json" },
//                 withCredentials: true,
//             });
              
//             const {token} = response.data;
            
//             localStorage.setItem("token",token);
            
//             navigate("/");

//             setFormData({
//                 email:"",
//                 password:"",
//             });

//         } catch (error) {
//             console.log("Error in login:", error.response?.data || error.message);
//             alert(error.response?.data?.message || "Login failed.");
//           }
//         };

//     const handleChange =(e)=>{
//         const {name,value} = e.target;
//         setFormData({
//             ...formData,
//             [name]:value,
//         });
//     };

//     return (
//         <div className='min-h-screen flex justify-center items-center'>
//             <form onSubmit={handleSubmit} method="post">
//                 <div>
//                     <h1>Enter Email</h1>
//                     <input 
//                         type="text"
//                         placeholder='enter email'
//                         name="email"
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                     <h1>Enter Password</h1>
//                     <input 
//                         type="text" 
//                         placeholder='enter password'
//                         name="password"
//                         required
//                         value={formData.password}
//                         onChange={handleChange}    
//                     />
//                     <button type="submit">Login</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

//new raj
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        'http://localhost:3000/users/api/login',
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
    <div className="min-h-screen bgGrid flex justify-center items-center">
      <form onSubmit={handleSubmit} method="post">
        <h1>Working ON UI</h1>
        <div>
          <h1>Enter Email</h1>
          <input
            type="text"
            placeholder="enter email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <h1>Enter Password</h1>
          <input
            type="password"
            placeholder="enter password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
