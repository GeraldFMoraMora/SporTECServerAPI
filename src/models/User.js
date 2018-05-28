import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String
});
const User = mongoose.model('users', UserSchema);
export default User;
