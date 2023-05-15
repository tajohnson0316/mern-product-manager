const Product = require("../models/product.model");

module.exports.findAllProducts = (_request, response) => {
  Product.find()
    .then((allProducts) => {
      console.log({ results: allProducts });
      response.status(200).json({ results: allProducts });
    })
    .catch((error) => {
      response.status(400).json(error);
    });
};

module.exports.findOneProduct = (request, response) => {
  Product.findOne({ _id: request.params.id })
    .then((product) => {
      console.log({ results: product });
      response.status(200).json({ results: product });
    })
    .catch((error) => {
      response.status(400).json(error);
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
      response.status(200).json({ results: newProduct });
    })
    .catch((error) => {
      response.status(400).json(error);
    });
};
