import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    category_name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: 'categories' },
);

export default mongoose.model('Category', categorySchema);
