import React from "react";

export default function Search({ movieInput, setMovieInput }) {
  return (
    <div className="search--box">
      <input
        className="search--box-input"
        type="text"
        placeholder="search movie"
        value={movieInput}
        onChange={(e) => {
          setMovieInput(e.target.value);
        }}
      />
    </div>
  );
}
