import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  async function movieSearch(searchTerm) {
    const { data } = await axios.get(
      `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`
    );
    console.log(data);
  }
  useEffect(() => {
    movieSearch(searchTerm);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/?s=${searchTerm}&page=1&apikey=fc1fef96`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <h1 className="text-white p-10 text-4xl whitespace-nowrap">
        What movie are you looking for today?
      </h1>
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
      <button
        // onClick={() => movieSearch()}
        className="text-2xl bg-gray-300 rounded-lg mt-6"
      >
        <span className="text-gray-900">Search Movie</span>
      </button>
    </div>
  );
};
