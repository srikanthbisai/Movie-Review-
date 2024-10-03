const HomePage = async () => {
  const res = await fetch('/api/movies'); // Use a relative path here
  const movies: Movie[] = await res.json();

  return (
      <div>
          <h1>Movies</h1>
          <ul>
              {movies.map(movie => (
                  <li key={movie.id}>
                      <h2>{movie.name} ({movie.releaseDate})</h2>
                      <ul>
                          {movie.reviews.map(review => (
                              <li key={review.id}>
                                  <strong>{review.reviewerName || 'Anonymous'}</strong>: {review.comment} (Rating: {review.rating})
                              </li>
                          ))}
                      </ul>
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default HomePage;
