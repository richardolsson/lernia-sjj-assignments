import connectToDatabase from '@/db/connectToDatabase';
import BookingModel from '@/db/models/BookingModel';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

type UrlParams = {
  params: {
    bookingId: string;
  };
};

const patchSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  seatIds: z.array(z.string()).optional(),
});

export type BookingPatchBody = z.infer<typeof patchSchema>;

export async function PATCH(request: NextRequest, { params }: UrlParams) {
  await connectToDatabase();

  const payload = await request.json();
  const parsed = patchSchema.safeParse(payload);

  if (!parsed.success) {
    return new NextResponse(null, { status: 400 });
  }

  const { bookingId } = params;
  const booking = await BookingModel.findById(bookingId);

  if (!booking) {
    return new NextResponse(null, { status: 404 });
  }

  if (parsed.data.firstName) {
    booking.firstName = parsed.data.firstName;
  }
  if (parsed.data.lastName) {
    booking.lastName = parsed.data.lastName;
  }
  if (parsed.data.email) {
    booking.email = parsed.data.email;
  }
  if (parsed.data.seatIds) {
    booking.seatIds = parsed.data.seatIds;
  }

  await booking.save();

  return NextResponse.json({
    id: booking._id,
    firstName: booking.firstName,
    lastName: booking.lastName,
    email: booking.email,
    seatIds: booking.seatIds,
    screeningId: booking.screeningId,
    status: booking.status,
  });
}
