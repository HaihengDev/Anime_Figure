import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
      trim: true,
    },
    product_image: {
      type: String,
    },
    stock: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, collation: 'products' },
);

export default mongoose.model('Product', productSchema);
