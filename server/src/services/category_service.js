import mongoose from 'mongoose';
import categoryRepository from '../repositories/category_repository.js';

class CategoryService {
  async getAll() {
    return await categoryRepository.findAll();
  }

  async getById(id) {
    if (!mongoose.isValidObjectId(id)) {
      throw new Error('Invalid id format.');
    }

    const category = await categoryRepository.findById(id);

    if (category) {
      const error = Error('Category not found.');
      error.statusCode = 404;
      throw error;
    }

    return category;
  }
}

export default new CategoryService();
