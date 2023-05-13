const Product = require("../models/product.model");

module.exports.findAllProducts = (request, response) => {
  Product.find()
    .then((allProducts) => {
      console.log({ results: allProducts });
      response.json({ results: allProducts });
    })
    .catch((error) => {
      response.json({ message: "Something went wrong...", error });
    });
};

module.exports.createNewProduct = (request, response) => {
  const { name, price, description } = request.body;
  Product.create({
    name,
    price,
    description,
  })
    .then((newProduct) => {
      console.log({ results: newProduct });
      response.json({ results: newProduct });
    })
    .catch((error) => {
      response.json({ message: "Something went wrong...", error });
    });
};
