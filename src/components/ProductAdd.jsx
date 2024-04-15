import React, { useState } from "react";
import axios from "axios";
import { PRODUCT_LIST_API } from "../constant/AppConstant";

function ProductAdd() {
  const [product, setProduct] = useState({});
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    axios
      .post(`${PRODUCT_LIST_API}/product`, product)
      .then(() => {
        alert("Create product successfully!");
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };
  return (
    <>
      <h2>Add New Product</h2>
      <form>
        <label htmlFor="name">Name </label>
        <input onChange={handleChange} type="text" name="name" />
        <br />
        <br />
        <label htmlFor="">Price </label>
        <input onChange={handleChange} type="text" name="price" />
        <br />
        <br />
        <label htmlFor="">Inventory </label>
        <input onChange={handleChange} type="text" name="inventory" />
        <br />
        <br />
        <input type="button" onClick={handleSubmit} value="Add" />
      </form>
    </>
  );
}

export default ProductAdd;
