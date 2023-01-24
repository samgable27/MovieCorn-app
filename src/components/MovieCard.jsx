import React from "react";

export const MovieCard = ({ Poster, Title, Year }) => {
  return (
    <div>
      <img src={Poster} alt="" />
      <h1 className="bg-red-700">{Title}this is a title</h1>
      <span>{Year}</span>
    </div>
  );
};
