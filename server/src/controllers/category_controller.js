import categoryService from '../services/category_service.js';

export const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAll();

    return res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error: err.message,
    });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await categoryService.getById(id);

    return res.status(category);
  } catch (err) {
    const statusCode =
      err.statusCode || err.message === 'Invalid id format.' ? 400 : 500;

    return res.status(statusCode).json({
      message: statusCode === 500 ? 'Internal Server Error' : err.message,
      error: err.message,
    });
  }
};
