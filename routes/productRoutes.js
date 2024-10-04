import express from "express";
import {
  searchProducts,
  getProductById,
  createProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", searchProducts);
router.get("/:id", getProductById);
<<<<<<< HEAD
<<<<<<< HEAD
=======

//to test the api from postman if a new product can be created
>>>>>>> 6a6920294cefc412ef2fa1611d62475d630c4706
=======

//to test the api from postman if a new product can be created
>>>>>>> 6a6920294cefc412ef2fa1611d62475d630c4706
router.post("/", createProduct);

export default router;
