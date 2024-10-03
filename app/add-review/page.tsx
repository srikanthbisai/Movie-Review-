'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddReviewPage = () => {
  const [movieId, setMovieId] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movieId, reviewerName, rating, comment }),
      });

      if (!response.ok) throw new Error('Failed to add review');

      setSuccess(true);
      router.push('/'); // Redirect to home page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add a Review</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Movie ID"
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
          className="border rounded-md p-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Your Name"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
        <input
          type="number"
          placeholder="Rating (0-10)"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="border rounded-md p-2 w-full"
          min="0"
          max="10"
          required
        />
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border rounded-md p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition">
          Add Review
        </button>
      </form>
      {success && <p className="text-green-600">Review added successfully!</p>}
    </div>
  );
};

export default AddReviewPage;
