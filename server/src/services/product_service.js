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

    return product;
  }
}

export default new ProductService();
