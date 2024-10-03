import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }) {
  const { id } = params; // Get the movie ID from the request parameters

  const movie = await prisma.movie.findUnique({
    where: { id: Number(id) },
    include: { reviews: true }, // Include reviews
  });

  if (!movie) {
    return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
  }

  return NextResponse.json(movie);
}
