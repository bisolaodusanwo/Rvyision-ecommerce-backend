import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { connectRedis } from "./config/redisConfig.js";

dotenv.config();
<<<<<<< HEAD
=======

//connect to database
>>>>>>> 6a6920294cefc412ef2fa1611d62475d630c4706
connectDB();
connectRedis();

const app = express();
<<<<<<< HEAD
app.use(express.json());
app.use(cors());
=======

//middleware
app.use(express.json());
app.use(cors());

//routes
>>>>>>> 6a6920294cefc412ef2fa1611d62475d630c4706
app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.send("API is working!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
<<<<<<< HEAD
  console.log(`Server running on port ${PORT}`);
=======
  console.log(`Server running at ${PORT}`);
>>>>>>> 6a6920294cefc412ef2fa1611d62475d630c4706
});
