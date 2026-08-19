import Product from '../models/product_model.js';

class ProductRepository {
  async getAll() {
    return await Product.find();
  }

  async getById(id) {
    const product = await Product.findById(id);
    return product;
  }
}

export default new ProductRepository();
