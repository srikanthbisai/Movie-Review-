"use client"
import { useEffect, useState } from 'react';

const MovieReviewsPage = ({ params }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const movieId = params.id;

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const res = await fetch(`/api/movies/${movieId}`);
      if (!res.ok) throw new Error('Failed to fetch movie');
      const movieData = await res.json();
      setMovie(movieData);
      setLoading(false);
    };

    fetchMovieReviews();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{movie.name} Reviews</h1>
      <ul className="space-y-2">
        {movie.reviews.map(review => (
          <li key={review.id} className="border rounded-lg p-4 bg-gray-50 mt-4 text-black flex flex-col">
            <h1>{review.comment} (Rating: {review.rating})</h1>
            <h1 className="font-semibold">{review.reviewerName || 'Anonymous'}</h1>: 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviewsPage;
