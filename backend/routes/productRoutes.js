import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
} from "../controllers/productControllers.js";
const router = express.Router();
import { protect, admin } from "../middlewares/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id").get(getProductById);

export default router;
