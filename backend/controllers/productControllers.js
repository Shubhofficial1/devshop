import Product from "../model/productModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

// @desc    Fetch all products
// @route   GET /api/v1/products
// @access  public
const getProducts = asyncHandler(async (req, res) => {
  const product = await Product.find({});
  res.json(product);
});

// @desc    Fetch single products
// @route   GET /api/v1/products/:id
// @access  public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.status(200).json(product);
  }

  res.status(404);
  throw new Error("Resource not found");
});

export { getProducts, getProductById };
