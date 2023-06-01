import connectToDatabase from '@/db/connectToDatabase';
import BookingModel from '@/db/models/BookingModel';
import { NextRequest, NextResponse } from 'next/server';

type PostParams = {
  params: {
    screeningId: string;
  };
};

export async function POST(request: NextRequest, { params }: PostParams) {
  await connectToDatabase();

  const { screeningId } = params;

  const booking = new BookingModel({
    screeningId,
  });

  await booking.save();

  return NextResponse.json({
    id: booking._id,
  });
}
