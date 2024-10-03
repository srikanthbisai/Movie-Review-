import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const reviews = await prisma.review.findMany();
  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
    const { movieId, reviewerName, rating, comment } = await request.json(); // Change comments to comment
    const newReview = await prisma.review.create({
      data: {
        movieId,
        reviewerName,
        rating,
        comment, // Ensure you use comment here
      },
    });
    return NextResponse.json(newReview);
  }
  