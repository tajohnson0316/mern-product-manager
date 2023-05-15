import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const { products, setProducts } = props;

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");

  const [errors, setErrors] = useState([]);

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
        const errorResponse = error.response.data.errors; // Get the errors from error.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });

    setProductName("");
    setProductPrice(0);
    setProductDescription("");
  };

  return (
    <fieldset>
      <div className="card mb-3">
        <div className="card-header text-center">
          <h2>Submit New Product</h2>
        </div>
        <div className="card-body">
          <form onSubmit={createProduct}>
            <div className="text-danger fw-bold">
              {errors.map((err, index) => (
                <p key={index}>{err}</p>
              ))}
            </div>
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
