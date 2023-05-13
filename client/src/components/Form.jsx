import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const { products, setProducts } = props;

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");

  const createProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
    };

    axios
      .post("http://localhost:8001/api/products", newProduct)
      .then((response) => {
        console.log("✔ POST REQUEST SUCCESSFUL =>", response);
        setProducts([...products, response.data.results]);
      })
      .catch((error) => {
        console.log("❌ERROR IN SERVER RESPONSE =>", error);
      });
  };

  return (
    <fieldset>
      <div className="card">
        <div className="card-header text-center">
          <h2>Submit New Product</h2>
        </div>
        <div className="card-body">
          <form onSubmit={createProduct}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Product Name:
              </label>
              <input
                type="text"
                name="productName"
                id="productName"
                className="form-control"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">
                Product Price:
              </label>
              <input
                type="number"
                min={0.0}
                step={0.01}
                name="productPrice"
                id="productPrice"
                className="form-control"
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productDescription" className="form-label">
                Product Description:
              </label>
              <input
                type="text"
                name="productDescription"
                id="productDescription"
                className="form-control"
                style={{ height: "100px" }}
                onChange={(e) => setProductDescription(e.target.value)}
                value={productDescription}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create Product
            </button>
          </form>
        </div>
      </div>
    </fieldset>
  );
};

export default Form;
