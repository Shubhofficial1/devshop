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

// @desc    Create Product
// @route   POST /api/v1/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample product",
    price: 0,
    user: req.user._id,
    image: "/images/sample.png",
    brand: "Sample Brand",
    category: "Sample Category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample Description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createProduct);
});

// @desc    Update a Product
// @route   PUT /api/v1/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductById, createProduct, updateProduct };
