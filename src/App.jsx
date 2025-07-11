import "./App.css";
import React, { useEffect, useState } from "react";
import Search from "./search.svg";
import MovieCard from "./MovieCard";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = `https://www.omdbapi.com?apikey=${API_KEY}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const searchMovies = async (title) => {
    const respons = await fetch(`${API_URL}&s=${title}`);
    const data = await respons.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("superman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={Search} alt="search" onClick={() => searchMovies(search)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No moies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
