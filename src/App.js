import React, { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=b6ff10ba';




function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] =  useState("");


  useEffect(()=>{
    searchMovies("Shrek");
  },[]);


  async function searchMovies(title){
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  }
  


  return (
    <div className="app">
      <h1>Watch Movie</h1>

      <div className='search'>
        <input  value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} placeholder="Search For Movies"/>
        <img src={SearchIcon} alt="search" onClick={()=>{searchMovies(searchTerm)}}/>
      </div>

      {
        (movies?.length > 0) ? (
          <div className="container">
              {movies.map((movie)=>(<MovieCard movie={movie}/>))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )
      }




    </div>
  );
}

export default App;
