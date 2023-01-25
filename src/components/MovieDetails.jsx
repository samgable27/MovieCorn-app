import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export const MovieDetails = ({ selectedMovie }) => {
  const [movieInfo, setMovieInfo] = useState();
  useEffect(() => {
    async function fetchMovieDetails(selectedMovie) {
      await axios
        .get(`http://www.omdbapi.com/?i=${selectedMovie}&apikey=fc1fef96`)
        .then((response) => {
          setMovieInfo(response.data);
        });
    }
    fetchMovieDetails();
  }, [selectedMovie]);

  return (
    <div>
      {/* <h1>this is the movie details</h1> */}
      {movieInfo && (
        <MovieCard
          movieInfo={movieInfo}
          fetchMovieDetails={fetchMovieDetails}
        />
      )}
    </div>
  );
};
