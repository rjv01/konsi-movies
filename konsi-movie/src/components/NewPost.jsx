import axios from 'axios';
import React, { useState } from 'react'

export default function NewPost() {
    const [name,setName] = useState("");
    const [director,setDirector] = useState("");
    const [rating,setRating] = useState("");
    const [genre,setGenre] = useState("");
    const [about,setAbout] = useState("");
    const [urview,setUrview] = useState("");

    const handleSubmitBtn = async(e)=>{
        e.preventDefault();
        console.log("Entered data",name,director,rating,genre,about,urview);

        try{
            const response = await axios.post(
               `${import.meta.env.VITE_BACKEND_URL}/movies/api/posting`,
               {    
                    name: name.trim(),
                    director: director.trim(),
                    rating:rating.trim(),
                    genre:genre.trim(),
                    about: about.trim(),
                    urview: urview.trim()
                },
                {
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    withCredentials: true
                }
            );
            console.log("Movie posted successfully",response?.data?.message);
            alert("Movie posted successfully");
            setName('');
            setDirector('');
            setRating('');
            setGenre('');
            setAbout('');
            setUrview('');
        }catch(error){
            console.log("Error in posting movie",error?.message);
            alert("Error in posting movie frontend");
        }
    }
    
    return (
        <div className='min-h-screen bgGrid flex  justify-center items-center'>
            <div className='flex'>
                <h1>New Post</h1>
            </div>
            <form
                onSubmit={handleSubmitBtn}
                className='flex flex-col ring-2 rounded-lg p-2 m-2'
            >
                Name:<input 
                    type="text"
                    value={name}
                    name='name'
                    className='bg-neutral-600 rounded-lg text-white p-2 m-2'
                    placeholder='Name'
                    onChange={(e)=>setName(e.target.value)}
                />
                Director<input 
                    type="text"
                    value={director}
                    name='director'
                    className='bg-neutral-600 rounded-lg text-white p-2 m-2'
                    placeholder='director'
                    onChange={(e)=>setDirector(e.target.value)}
                />
                Rating<input 
                    type="text"
                    value={rating}
                    name='rating'
                    className='bg-neutral-600 rounded-lg text-white p-2 m-2'
                    placeholder='rating'
                    onChange={(e)=>setRating(e.target.value)}
                />
                Genre<input 
                    type="text"
                    value={genre}
                    name='genre'
                    className='bg-neutral-600 rounded-lg text-white p-2 m-2'
                    placeholder='genre'   
                    onChange={(e)=>setGenre(e.target.value)}
                />
                About<textarea
                    cols={3}
                    rows={3}
                    value={about}
                    name='about'
                    className='bg-neutral-600 rounded-lg text-white p-2 m-2'
                    placeholder='about'   
                    onChange={(e)=>setAbout(e.target.value)}
                />
                Urview<textarea
                    cols={3}
                    rows={3}
                    value={urview}
                    name='urview'
                    className='bg-neutral-600 rounded-lg text-white p-2 m-2'
                    placeholder='urview'   
                    onChange={(e)=>setUrview(e.target.value)}
                />
                <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded-lg'
                >
                    Post
                </button>
            </form>
        </div>
    )
}