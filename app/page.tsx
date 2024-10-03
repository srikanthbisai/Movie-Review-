"use client";
import React, { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import { useRouter } from 'next/navigation'; // Import useRouter

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('/api/movies');
      const data = await response.json();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Movies</h1>
      
      {/* Buttons for adding a new movie and review */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => router.push('/add-movie')} // Redirect to add movie page
          className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-blue-600 transition"
        >
          Add New Movie
        </button>
        <button
          onClick={() => router.push('/add-review')} // Redirect to add review page
          className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 transition"
        >
          Add New Review
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.name}
            releaseDate={movie.releaseDate}
            averageRating={
              movie.reviews.length > 0
                ? movie.reviews.reduce((acc, review) => acc + review.rating, 0) / movie.reviews.length
                : null 
            }
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
