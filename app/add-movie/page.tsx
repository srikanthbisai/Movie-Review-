'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddMoviePage = () => {
  const [name, setName] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, releaseDate }),
      });

      if (!response.ok) throw new Error('Failed to add movie');

      setSuccess(true);
      router.push('/'); // Redirect to home page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add a Movie</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Movie Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md p-2 w-full"
          required
        />
        <input
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          className="border rounded-md p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition">
          Add Movie
        </button>
      </form>
      {success && <p className="text-green-600">Movie added successfully!</p>}
    </div>
  );
};

export default AddMoviePage;
