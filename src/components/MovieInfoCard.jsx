import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const MovieInfoCard = ({
  movie,
  Title,
  Year,
  imdbID,
  Type,
  Poster,
  index,
  selectedMovie,
}) => {
  return (
    <div>
      <img src={Poster} alt="" />
      <h1>This is the movie info card</h1>
    </div>
  );
};
