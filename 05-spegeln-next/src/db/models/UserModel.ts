import mongoose from 'mongoose';

const UserModelSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  passwordHash: String,
});

// Reuse existing model definition in case module
// gets imported more than once (which is weird)
const UserModel =
  mongoose.models.User || mongoose.model('User', UserModelSchema);

export default UserModel;