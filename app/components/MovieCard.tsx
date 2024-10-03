'use client';

import React from 'react';
import ReviewForm from './ReviewForm';

const MovieCard = ({ movie }) => {
  return (
    <div className="border p-4">
      <h2 className="text-lg">{movie.name}</h2>
      <p>Release Date: {new Date(movie.releaseDate).toDateString()}</p>
      <p>Average Rating: {movie.averageRating}</p>

      {/* Include ReviewForm here */}
      <ReviewForm movieId={movie.id} />
      
      {/* Render reviews */}
      <ul>
        {movie.reviews.map(review => (
          <li key={review.id}>
            <strong>{review.reviewerName || 'Anonymous'}</strong>: {review.comment} (Rating: {review.rating})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCard;
