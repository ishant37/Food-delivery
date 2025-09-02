import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: String,
  description: String,
  createdBy: String // user or consumer id
});

export default mongoose.model('Item', ItemSchema);
