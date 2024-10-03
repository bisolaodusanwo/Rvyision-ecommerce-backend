import express from "express";
import {
  searchProducts,
  getProductById,
  createProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", searchProducts);
router.get("/:id", getProductById);

//to test the api from postman if a new product can be created
router.post("/", createProduct);

export default router;
