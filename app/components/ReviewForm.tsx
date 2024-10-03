'use client';

import React, { useState } from 'react';

const ReviewForm = ({ movieId }) => {
  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

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

      if (!response.ok) throw new Error('Failed to submit review');

      // Clear the form
      setReviewerName('');
      setRating(0);
      setComment('');
      setSuccess(true);
    } catch (err:any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={reviewerName}
        onChange={(e) => setReviewerName(e.target.value)}
        className="border rounded-md p-2 w-full"
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border rounded-md p-2 w-full"
        min="0"
        max="10"
      />
      <textarea
        placeholder="Comments"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border rounded-md p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition">
        Submit Review
      </button>
      {success && <p className="text-green-600">Review submitted successfully!</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default ReviewForm;
