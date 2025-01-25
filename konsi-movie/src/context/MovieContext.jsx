import React,{createContext, useState} from 'react'

const MovieArrayContext = createContext();

export const MovieContext = ({children})=> {
    const [movies,setMovies] = useState([]);
    const [copyMovies,setCopyMovies] = useState([]);
    
    return(
        <MovieArrayContext.Provider value={{movies,setMovies,copyMovies,setCopyMovies}}>
            {children}
        </MovieArrayContext.Provider>
    )
}
export default MovieArrayContext;