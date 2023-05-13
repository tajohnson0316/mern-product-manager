const mongoose = require("mongoose");

// const cashRegEx = /^\$(0|[1-9][0-9]{0,2})(,\d{3})*(\.\d{1,2})?$/;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for each product."],
      minlength: [2, "Product name must be at least 2 characters in length."],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for each product."],
      min: [0, "Please provide a value greater than $0.00"],
      // match: [cashRegEx, "Ensure your price"]
    },
    description: {
      type: String,
      required: [true, "Please provide a description for each product."],
      minlength: [10, "Product description must be 10 characters or more."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
