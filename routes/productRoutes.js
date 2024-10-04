import express from "express";
import {
  searchProducts,
  getProductById,
  createProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", searchProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);

export default router;
