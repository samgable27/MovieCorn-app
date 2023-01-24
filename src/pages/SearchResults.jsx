import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SearchResults = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movie, setMovie] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

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

  async function fetchMovieDetails() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?i=${movie.dataset.imdbID}&apikey=fc1fef96`
    );
    setMovieId(data);
    console.log(data);
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
                <Link to={`/searchresults/${movie.imdbID}`}>
                  <div className="p-8 cursor-pointer">
                    <div className="flex flex-col items-center" key={index}>
                      <img
                        onClick={() => fetchMovieDetails()}
                        className="h-60 w-60 rounded-lg hover:scale-110 transition-all duration-150 ease-out"
                        src={movie.Poster}
                        alt=""
                      />
                      <div className="flex flex-col items-center  text-ellipsis whitespace-nowrap overflow-hidden ">
                        <h1 className="text-white pt-5 whitespace-nowrap">
                          {movie.Title}
                        </h1>
                        <span className="text-orange-500">{movie.Year}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};
