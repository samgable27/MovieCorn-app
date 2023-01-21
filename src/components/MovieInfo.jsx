import React, { useEffect } from "react";
import axios from "axios";

export default function MovieInfo() {
  async function movieSearch(searchTerm) {
    const { data } = await axios.get(
      `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`
    );
  }

  useEffect(() => {
    movieSearch();
  }, []);
  return <div>MovieInfo</div>;
}
