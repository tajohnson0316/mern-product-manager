import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <fieldset className="container p-5">
      <Main products={products} setProducts={setProducts} />
    </fieldset>
  );
}

export default App;
