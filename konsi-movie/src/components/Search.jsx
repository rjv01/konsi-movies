import React,{useContext, useEffect, useState} from 'react'
import MovieArrayContext from '../context/MovieContext';
import axios from 'axios';

export default function Search() {
    const {movies,setMovies,copyMovies,setCopyMovies} = useContext(MovieArrayContext);
    const [search,setSearch] = useState('');

    useEffect(()=>{
        // console.log('re-render');
        setMovies(movies);
    },[movies]);

    async function fetchMovies() {
        try {
          const response = await axios.get('https://konsi-movie-backend-2.onrender.com/movies/api/all');
          const moviesWithReportCount = response.data.map((movie) => ({
            ...movie,
            reportCount: 5, //report count of 5
          }));
          setMovies(moviesWithReportCount); //  API returns an array of movies
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      }
  

    async function handleSearch(e){
        const searchMoives = e.target.value.toLowerCase();
        setSearch(searchMoives)


        if(searchMoives === ''){
            await fetchMovies();
            return;
        }
        
        const searchedMovies = movies.filter((movie)=>{
            return movie.name.toLowerCase().includes(searchMoives) || movie.director.toLowerCase().includes(searchMoives) || 
            movie.genre.toLowerCase().includes(searchMoives);
        });
        
        setMovies(searchedMovies);
        // console.log("op ",searchedMovies);
    }

    return (
        <div className="flex items-center bg-white text-slate-900 px-[5%] py-[1px] rounded-full shadow-md">
        <form onSubmit={(e) => e.preventDefault()}>
        <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search"
            className="outline-none text-slate-900 p-[1px] rounded-l-full w-[300px] text-2xl"
            // onChange={handleChange()}
        />
        </form>
        <button className="p-3">
            <i className="fa-solid fa-magnifying-glass text-slate-900 text-2xl"></i>
        </button>
        </div>
    )
}
