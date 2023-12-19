import express from "express";
import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../model/productModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const product = await Product.find({});
    res.json(product);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      return res.status(200).json(product);
    }

    res.status(404);
    throw new Error("Resource not found");
  })
);

export default router;
