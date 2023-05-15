const productController = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/api/products", productController.findAllProducts);
  app.get("/api/products/:id", productController.findOneProduct);
  app.post("/api/products", productController.createNewProduct);
};
