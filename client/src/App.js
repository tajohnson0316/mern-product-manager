import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import ProductView from "./components/ProductView";
import ProductEdit from "./components/ProductEdit";

function App() {
  const [products, setProducts] = useState([]);

  const removeFromDom = (productID) => {
    setProducts(products.filter((product) => product._id !== productID));
  };

  return (
    <fieldset className="container p-5">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              products={products}
              setProducts={setProducts}
              removeFromDom={removeFromDom}
            />
          }
        />
        <Route path="/api/products/:id" element={<ProductView />} />
        <Route path="/api/products/edit/:id" element={<ProductEdit />} />
      </Routes>
    </fieldset>
  );
}

export default App;
