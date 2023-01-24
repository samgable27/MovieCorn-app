import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate(`/?s=${searchTerm}&page=1&apikey=fc1fef96`);
    navigate(`/searchresults`);
  };

  async function movieSearch(searchTerm) {
    const { data } = await axios.get(
      `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`
    );
    setMovie(data.Search);
    console.log(data);
  }

  return (
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
  );
}
