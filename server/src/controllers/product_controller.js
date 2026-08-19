import productService from '../services/product_service.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.findAll();

    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: err.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await productService.findById(id);

    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: err.message,
    });
  }
};
