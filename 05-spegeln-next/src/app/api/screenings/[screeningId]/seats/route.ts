import connectToDatabase from '@/db/connectToDatabase';
import BookingModel from '@/db/models/BookingModel';
import { SeatInfo } from '@/features/movies/types';
import { NextRequest, NextResponse } from 'next/server';

type RouteParams = {
  params: {
    screeningId: string;
  };
};

const SEATS = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];

export async function GET(request: NextRequest, { params }: RouteParams) {
  await connectToDatabase();

  const bookingId = request.nextUrl.searchParams.get('booking');

  const screeningId = parseInt(params.screeningId);
  console.log(screeningId);

  const bookings = await BookingModel.find({ screeningId });

  const result: SeatInfo[] = SEATS.map((seatId) => {
    let status: SeatInfo['status'] = 'available';

    const existingBooking = bookings.find((booking) =>
      booking.seatIds.includes(seatId)
    );
    if (existingBooking) {
      if (existingBooking.id == bookingId) {
        status = 'reservedByUser';
      } else {
        status = 'unavailable';
      }
    }
    return {
      seatId,
      status,
    };
  });

  return NextResponse.json({ seats: result });
}
