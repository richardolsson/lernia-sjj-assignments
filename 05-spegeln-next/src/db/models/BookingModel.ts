import mongoose from 'mongoose';

interface IBookingModel {
  firstName: string;
  lastName: string;
  email: string;
  userId?: string;
  seatIds: string[];
  screeningId: number;
  status: 'inprogress' | 'paid';
}

const BookingModelSchema = new mongoose.Schema<IBookingModel>({
  firstName: String,
  lastName: String,
  email: String,
  userId: { type: String, required: false },
  seatIds: [String],
  screeningId: Number,
  status: String,
});

const BookingModel =
  (mongoose.models.Booking as mongoose.Model<IBookingModel>) ||
  mongoose.model('Booking', BookingModelSchema);

export default BookingModel;
