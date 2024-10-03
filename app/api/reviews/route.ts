import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const reviews = await prisma.review.findMany();
  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
  const { movieId, reviewerName, rating, comments } = await request.json();
  const newReview = await prisma.review.create({
    data: {
      movieId,
      reviewerName,
      rating,
      comments,
    },
  });
  return NextResponse.json(newReview);
}
