import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieInfoCard } from "./MovieInfoCard";

export const MovieDetails = ({ selectedMovie, movie }) => {
  const [movieInfo, setMovieInfo] = useState();
  useEffect(() => {
    async function fetchMovieDetails({ selectedMovie }) {
      await axios
        .get(`http://www.omdbapi.com/?i=${selectedMovie}&apikey=fc1fef96`)
        .then((response) => {
          setMovieInfo(response.data);
          console.log(movieInfo);
        });
    }
    fetchMovieDetails(movieInfo);
  }, [selectedMovie]);

  return (
    <div>
      {/* <h1>this is the movie details</h1> */}
      {movieInfo && (
        <>
          <MovieInfoCard selectedMovie={selectedMovie} movie={movie} />
        </>
      )}
    </div>
  );
};
