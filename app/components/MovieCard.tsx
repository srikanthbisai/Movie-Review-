'use client';

import React from 'react';
import ReviewForm from './ReviewForm';

const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded-lg p-4 bg-gray-50 mt-4">
      <p className="font-medium">Average Rating: {movie.averageRating}</p>
      
      {/* Include ReviewForm here */}
      <ReviewForm movieId={movie.id} />
      
      {/* Render reviews */}
      <ul className="mt-4 space-y-2">
        {movie.reviews.map(review => (
          <li key={review.id} className="flex justify-between">
            <span className="font-semibold">{review.reviewerName || 'Anonymous'}</span>: 
            <span>{review.comment} (Rating: {review.rating})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCard;
