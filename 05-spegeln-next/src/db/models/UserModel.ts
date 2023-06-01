import mongoose from 'mongoose';

interface IUserModelSchema {
  firstName: string;
  lastName: string,
  email: string,
  passwordHash: string;
}

const UserModelSchema = new mongoose.Schema<IUserModelSchema>({
  firstName: String,
  lastName: String,
  email: String,
  passwordHash: String,
});

// Reuse existing model definition in case module
// gets imported more than once (which is weird)
const UserModel =
  (mongoose.models.User as mongoose.Model<IUserModelSchema>) ||
  mongoose.model('User', UserModelSchema);

export default UserModel;
