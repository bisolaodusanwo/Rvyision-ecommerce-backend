import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { connectRedis } from "./config/redisConfig.js";

dotenv.config();
connectDB();
connectRedis();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.send("API is working!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
