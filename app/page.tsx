import React from 'react';
import MovieCard from './components/MovieCard';
import { Movie } from '@prisma/client';

const HomePage = async () => {
  const res = await fetch('/api/movies');
  const movies: Movie[] = await res.json();

  return (
    <div>
      <h1>Movies</h1>
      <div className="grid grid-cols-1 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
