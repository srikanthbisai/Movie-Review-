// app/api/movies/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const movies = await prisma.movie.findMany({
    include: { reviews: true }, // Ensure to include reviews
  });
  return NextResponse.json(movies);
}

export async function POST(request: Request) {
  const { name, releaseDate } = await request.json();
  const newMovie = await prisma.movie.create({
    data: { name, releaseDate: new Date(releaseDate) },
  });
  return NextResponse.json(newMovie);
}
