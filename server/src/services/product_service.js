import mongoose from 'mongoose';
import productRepository from '../repositories/product_repository.js';

class ProductService {
  async findAll() {
    return await productRepository.getAll();
  }

  async findById(id) {
    if (!mongoose.isValidObjectId(id)) {
      throw new Error('Invalid id format.');
    }

    const product = await productRepository.getById(id);

    if (!product) {
      const error = new Error('Product not found.');
      error.statusCode = 404;
      throw error;
    }

    return product;
  }
}

export default new ProductService();
