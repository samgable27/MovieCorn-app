import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

export const MovieCard = ({
  movie,
  Title,
  Year,
  imdbID,
  Type,
  Poster,
  index,
  setSelectedMovie,
  selectedMovie,
}) => {
  const navigate = useNavigate();

  return (
    <div onClick={setSelectedMovie(movie.imdbID)}>
      <div className="p-8 cursor-pointer">
        <div className="flex flex-col items-center" key={index}>
          <img
            onClick={() =>
              navigate(`/searchresults/moviedetails/${selectedMovie}`)
            }
            className="h-[60] w-[60] rounded-lg hover:scale-110 transition-all duration-150 ease-out"
            src={movie.Poster}
            alt=""
          />
          <div className="flex flex-col items-center">
            <h1 className="text-white pt-5 whitespace-nowrap">{movie.Title}</h1>
            <span className="text-orange-500">{movie.Year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
