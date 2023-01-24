import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  return (
    <div>
      {/* <h1>{movie.Title}</h1>
      <span>{movie.Year}</span>
      <span>{Rated}</span>
      <span>{Released}</span>
      <span>{Runtime}</span>
      <span>{Genre}</span>
      <span>{Director}</span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <img src={movie.Poster} alt="" /> */}
    </div>
  );
};
