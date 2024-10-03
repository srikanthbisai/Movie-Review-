'use client';

import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="border p-4">
      <h2 className="text-lg">{movie.name}</h2>
      <p>Release Date: {new Date(movie.releaseDate).toDateString()}</p>
      <p>Average Rating: {movie.averageRating}</p>
    </div>
  );
};

export default MovieCard;
