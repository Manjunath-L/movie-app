import React, { useEffect } from "react";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = `https://www.omdbapi.com?apikey=${API_KEY}`;

const App = () => {
  const searchMovies = async (title) => {
    const respons = await fetch(`${API_URL}&s=${title}`);
    const data = await respons.json();
    console.log(data);
  };
  useEffect(() => {
    searchMovies("superman ");
  }, []);
  return <div></div>;
};

export default App;
