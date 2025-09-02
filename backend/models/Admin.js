import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String // hash in production
});

export default mongoose.model('Admin', AdminSchema);
