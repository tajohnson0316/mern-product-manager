import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

const Main = (props) => {
  const { products, setProducts, removeFromDom } = props;

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
  }, [setProducts]);

  const deleteProduct = (productID) => {
    axios
      .delete(`http://localhost:8001/api/products/${productID}`)
      .then((response) => {
        console.log(response.data);
        removeFromDom(productID);
      })
      .catch((error) => {
        console.log("❌ERROR IN SERVER RESPONSE =>", error);
      });
  };

  return (
    <div>
      <Form products={products} setProducts={setProducts} />

      <div className="card mb-3">
        <div className="card-header text-center">
          <h2>All Products</h2>
        </div>
        <div className="card-body">
          <ul>
            {products.map((product) => {
              return (
                <li className="mb-3" key={product._id}>
                  {/* {JSON.stringify(product)} */}
                  <h3>
                    <Link to={`/api/products/${product._id}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p>
                    <span className="fw-bold">Price: </span>${product.price}
                  </p>
                  <p>
                    <span className="fw-bold">Description: </span>
                    {product.description}
                  </p>
                  <div className="d-flex justify-content-start gap-3">
                    <Link
                      className="text-success"
                      to={`/api/products/edit/${product._id}`}
                    >
                      EDIT PRODUCT
                    </Link>
                    <span> | </span>
                    <Link
                      to={"/"}
                      className="text-danger"
                      onClick={(e) => {
                        deleteProduct(product._id);
                      }}
                    >
                      DELETE PRODUCT
                    </Link>
                  </div>
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
