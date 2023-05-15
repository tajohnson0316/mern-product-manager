import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductView = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/products/${id}`)
      .then((response) => {
        console.log(response.data.results);
        setProduct(response.data.results);
      })
      .catch((error) => {
        console.log("❌ERROR IN SERVER RESPONSE =>", error);
      });
  }, [id]);

  return (
    <fieldset>
      {product ? (
        <div className="card">
          <div className="card-header text-center">
            <h1>{product.name}</h1>
          </div>
          <div className="card-body">
            <p>
              <span className="fw-bold">Price: </span>${product.price}
            </p>
            <p>
              <span className="fw-bold">Description: </span>
              {product.description}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </fieldset>
  );
};

export default ProductView;
