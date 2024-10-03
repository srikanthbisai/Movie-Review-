"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

interface MovieCardProps {
  id: number;
  title: string;
  releaseDate: string;
  averageRating: number | null; // Allow null
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, releaseDate, averageRating }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/reviews/${id}`); // Navigate to the reviews page for this movie
  };

  return (
    <div
      className="border rounded-md p-4 cursor-pointer hover:shadow-lg transition"
      onClick={handleCardClick}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">Release Date: {new Date(releaseDate).toLocaleDateString()}</p>
      <p className="text-gray-600">
        Average Rating: {averageRating !== null ? averageRating.toFixed(1) : 'N/A'}
      </p>
    </div>
  );
};

export default MovieCard;
