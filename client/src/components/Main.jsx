import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";

const Main = (props) => {
  const { products, setProducts } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8001/api/products")
      .then((response) => {
        console.log("✔ SUCCESSFUL SERVER RESPONSE =>", response.data.results);
        setProducts(response.data.results);
      })
      .catch((error) => {
        console.log("❌ERROR IN SERVER RESPONSE =>", error);
      });
  }, []);

  return (
    <div>
      <Form products={products} setProducts={setProducts} />

      <div className="card">
        <div className="card-header text-center">
          <h2>All Products</h2>
        </div>
        <div className="card-body">
          <ul>
            {products.map((product) => {
              return (
                <li key={product._id}>
                  {/* {JSON.stringify(product)} */}
                  <h3>{product.name}</h3>
                  <p>
                    <span className="fw-bold">Price: </span>${product.price}
                  </p>
                  <p>
                    <span className="fw-bold">Description: </span>
                    {product.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
