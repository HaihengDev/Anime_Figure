import Category from '../models/category_model.js';

class CategoryRepository {
  async findAll() {
    return await Category.find();
  }

  async findById(id) {
    const category = await Category.findById(id);

    return category;
  }
}

export default new CategoryRepository();
