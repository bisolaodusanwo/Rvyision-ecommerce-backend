import Product from "../models/product.js";
import { redisClient } from "../config/redisConfig.js";

export const searchProducts = async (req, res) => {
  const query = req.query.q;

  try {
    if (!query) {
      const allProducts = await Product.find();
      return res.status(200).json(allProducts);
    }

    const cachedProducts = await redisClient.get(`searchProducts:${query}`);
    
    if (cachedProducts) {
      return res.status(200).json(JSON.parse(cachedProducts));
    }

    const products = await Product.find({
      name: { $regex: query, $options: "i" },
    });

    if (products.length > 0) {
      await redisClient.setEx(
        `searchProducts:${query}`,
        3600,
        JSON.stringify(products)
      );
    }

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: "Failed to search products" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const cachedProduct = await redisClient.get(`product:${req.params.id}`);

    if (cachedProduct) {
      return res.status(200).json(JSON.parse(cachedProduct));
    }

    const product = await Product.findById(req.params.id);

    if (product) {
      await redisClient.setEx(
        `product:${req.params.id}`,
        3600,
        JSON.stringify(product)
      );
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error fetching product" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, description, countInStock, imageUrl } = req.body;

    if (!name || !price || !description || !countInStock || !imageUrl) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const productExists = await Product.findOne({ name });

    if (productExists) {
      return res
        .status(400)
        .json({ message: `Product with name "${name}" already exists.` });
    }

    const product = new Product({
      name,
      price,
      description,
      countInStock,
      imageUrl,
    });

    const createdProduct = await product.save();

    await redisClient.del(`searchProducts:${name}`);
    await redisClient.flushAll();

    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Error creating product" });
  }
};
