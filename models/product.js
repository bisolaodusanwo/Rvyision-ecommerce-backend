import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
<<<<<<< HEAD
    timestamps: true,
=======
    timestamps: true, //It will adds two new fields in the schema createdAt and updatedAt, it will store the date and time of the creation and last update of the document.
>>>>>>> 6a6920294cefc412ef2fa1611d62475d630c4706
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
