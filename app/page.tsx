// Import the MovieCard component
import MovieCard from './components/MovieCard';

// app/page.tsx
const HomePage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }
  
  const movies = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Movies</h1>
      <ul className="space-y-6">
        {movies.map(movie => (
          <li key={movie.id} className="border rounded-lg shadow-lg p-4 bg-white text-black">
            <h2 className="text-2xl font-semibold">
              {movie.name} ({new Date(movie.releaseDate).toDateString()})
            </h2>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
