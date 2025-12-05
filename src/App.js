import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HeaderComponent from "./header";
import ProductsComponent from "./products";
import { Routes, Route } from "react-router-dom";
import Product_1_Component from "./product_1_details";
import Product_2_Component from "./product_2_details";
import Product_3_Component from "./product_3_details";
import Product_4_Component from "./product_4_details";
import Product_5_Component from "./product_5_details";
import Product_6_Component from "./product_6_details";
import Product_7_Component from "./product_7_details";
import Product_8_Component from "./product_8_details";
import Model from "./modal";
import { useState } from "react";

function App() {

  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <div className="App">

      <HeaderComponent setSearchKeyword={setSearchKeyword} />

      <Routes>
        <Route path="/" element={<ProductsComponent searchKeyword={searchKeyword} />} />
        <Route path="/details" element={<Product_1_Component />} />
        <Route path="/details2" element={<Product_2_Component />} />
        <Route path="/details3" element={<Product_3_Component />} />
        <Route path="/details4" element={<Product_4_Component />} />
        <Route path="/details5" element={<Product_5_Component />} />
        <Route path="/details6" element={<Product_6_Component />} />
        <Route path="/details7" element={<Product_7_Component />} />
        <Route path="/details8" element={<Product_8_Component />} />
        <Route path="/modal" element={<Model />} />
      </Routes>
    </div>
  );
}

export default App;
