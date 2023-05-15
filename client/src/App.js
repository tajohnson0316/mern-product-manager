import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import ProductView from "./components/ProductView";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <fieldset className="container p-5">
      <Routes>
        <Route
          path="/"
          element={<Main products={products} setProducts={setProducts} />}
        />
        <Route path="/api/products/:id" element={<ProductView />} />
      </Routes>
    </fieldset>
  );
}

export default App;
