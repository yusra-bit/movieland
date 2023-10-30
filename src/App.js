import React, { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from "./search.svg";

 const API_URL = 'https://www.omdbapi.com?apikey=dafe4a9a';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Mean Girls');
  }, []);


  return(
    <div className="app">
      <h1>MovieLand</h1>

      <div  className="search">
        <input 
          placeholder="Seach for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
         src={SearchIcon}
         alt='search'
         onClick={() => searchMovies(searchTerm)}
        />  
      </div>

      {/* Checking if it is empty or not*/}
      {
          movies?.length > 0 
          ? (
          <div className="container">  
            {movies.map((movie) => (
              <MovieCard 
              key={movie.id}
              movie={movie} />
          ))}
          </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}

    </div>
  );
}

export default App;