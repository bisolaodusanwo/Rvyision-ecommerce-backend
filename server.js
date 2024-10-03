import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { connectRedis } from "./config/redisConfig.js";

dotenv.config();

//connect to database
connectDB();
connectRedis();

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.send("API is working!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
