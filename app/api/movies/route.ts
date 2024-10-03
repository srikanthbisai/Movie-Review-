import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const movies = await prisma.movie.findMany({
    include: { reviews: true }, // Ensure to include reviews
  });
  
  // Calculate average rating
  const moviesWithAverageRating = movies.map(movie => {
    const averageRating = movie.reviews.length > 0 
      ? movie.reviews.reduce((acc, review) => acc + review.rating, 0) / movie.reviews.length 
      : 0;
    return { ...movie, averageRating };
  });

  return NextResponse.json(moviesWithAverageRating);
}

export async function POST(request: Request) {
  const { name, releaseDate } = await request.json();
  const newMovie = await prisma.movie.create({
    data: { name, releaseDate: new Date(releaseDate) },
  });
  return NextResponse.json(newMovie);
}
