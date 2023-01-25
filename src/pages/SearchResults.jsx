import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import { MovieDetails } from "../components/MovieDetails";

export const SearchResults = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movie, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const { movieid } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate(`/?s=${searchTerm}&page=1&apikey=fc1fef96`);
    navigate(`/searchresults`);
  };

  async function movieSearch(searchTerm) {
    setLoading(true);
    const { data } = await axios.get(
      `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`
    );
    setMovie(data.Search);
    setLoading(false);
    // console.log(data);
  }

  return (
    <div>
      <header className="flex w-full p-5 justify-between">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="text-white text-4xl">
            Movie<span className="text-orange-500">Corn.</span>
          </p>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && movieSearch(searchTerm)}
            type="text"
            placeholder="Search here..."
            className="rounded-lg outline-none text-4xl placeholder:italic placeholder:text-[30px]"
          />
        </form>

        {/* right */}
        <div className="flex space-x-4 items-center text-sm text-white cursor-pointer">
          <p className="hover:text-orange-500 text-lg">About Us</p>
          <p className="hover:text-orange-500 hover:text-underline text-lg">
            Contact
          </p>
        </div>
      </header>

      <div className="flex flex-wrap mt-40">
        {loading
          ? new Array(10).fill(0).map((element, index) => (
              <div className="post" key={index}>
                <div className="post__title">
                  <div className="w-[80px] h-[12px] bg-gray-500"></div>
                </div>
                <div className="">
                  <p className="w-[100%] h-[24px] bg-gray-500"></p>
                </div>
              </div>
            ))
          : movie.map((movie, index) => {
              return (
                <MovieCard
                  setSelectedMovie={setSelectedMovie}
                  selectedMovie={selectedMovie}
                  key={index}
                  movie={movie}
                />
              );
            })}
      </div>
    </div>
  );
};
