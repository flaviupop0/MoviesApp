import { useState, useEffect } from "react";
export const Movies = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async (term) => {
    const url = `http://www.omdbapi.com/?s=${term}&type=movie&apikey=e1a9660c`;
    const response = await fetch(url, { params: (term = term) });
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest("Drama");
  }, []);

  return [movies, getMovieRequest];
};
