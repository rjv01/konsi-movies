import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Register() {
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    });

    const navigate= useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token)
            navigate("/");
    },[navigate]);

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const {name,email,password,confirmPassword} = formData;

        const trimmedData = {
            name:name.trim(),
            email:email.trim(),
            password:password.trim(),
            confirmPassword:confirmPassword.trim(),
        };

        console.log(JSON.stringify({ name, email, password, confirmPassword }));
        
        if(!trimmedData.name || !trimmedData.email || !trimmedData.password || !trimmedData.confirmPassword){
            alert("Please fill in the required fields");
            return ;
        }

        if(trimmedData.password !== trimmedData.confirmPassword){
            alert("Passwords do not match");
            return ;
        }

        try{
            const formDataToSend = new FormData();
            formDataToSend.append("name", trimmedData.name);
            formDataToSend.append("email", trimmedData.email);
            formDataToSend.append("password", trimmedData.password);
            formDataToSend.append("confirmPassword", trimmedData.confirmPassword);

            const response = await axios.post(
                "http://localhost:3000/users/api/register",
                formDataToSend,
                {
                    headers:{
                        "Content-Type":"application/json",
                    },
                    withCredentials:true,
                }
            );
            const {token} = response.data;

            localStorage.setItem("token",token);

            alert("Registration successful!");
            navigate("/");
            
            window.location.reload()

            setFormData({
                name:"",
                email:"",
                password:"",
                confirmPassword:"",
            });
        } catch (error) {
            console.error("Error in register:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Registration failed.");
        }
    };

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    return (
        <div className='min-h-screen bgGrid flex flex-col justify-center items-center text-center'>
            <h1 className='text-3xl font-bold mb-4 text-blue-500'>Register Page</h1>
            <div className='m-2 p-2'>
                <form 
                    className='p-6 bg-blue-400 rounded-lg shadow-lg w-[500px]' 
                    onSubmit={handleSubmit} method="post">
                <div>
                    <h1 className='mb-2 text-2xl'>Username</h1>
                    <input 
                        type="text" 
                        name="name"
                        placeholder='Enter name'
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mb-4 p-2 border rounded"
                    />
                </div>
                <div>
                    <h1 className='mb-2 text-2xl' >Email</h1>
                    <input 
                        type="text" 
                        name="email"
                        placeholder='Enter Email'
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mb-4 p-2 border rounded"
                    />
                </div>
                <div>
                    <h1 className='mb-2 text-2xl' >Password</h1>
                    <input 
                        type="password" 
                        name="password"
                        placeholder='Enter password'
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full mb-4 p-2 border rounded"
                    />
                </div>
                <div>
                    <h1 className='mb-2 text-2xl' >Confirm Password</h1>
                    <input 
                        type="password" 
                        name="confirmPassword"
                        placeholder='Confirm password'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full mb-4 p-2 border rounded"
                    />
                </div>
                <button
                    type='submit'
                    className="bg-blue-600 text-white px-6 py-2 rounded shadow-md hover:bg-blue-800 transition"
                >
                    Create
                </button>
                <div className=''>
                    <p className="mt-2 text-lg">
                        Already have an account? 
                        <Link to="/login" className="text-white underline hover:text-black ml-2 duration-200">
                            Log In Here
                        </Link>
                    </p>
                </div>
                </form>
            </div>
        </div>
    )
}
