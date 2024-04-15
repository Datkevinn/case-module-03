import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { PRODUCT_LIST_API } from "../constant/AppConstant";

function ProductDelete() {
  const { id } = useParams("id");
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(product).length === 0) {
      fetchProduct();
    }
  }, [product]);
  const fetchProduct = async () => {
    await axios
      .get(`${PRODUCT_LIST_API}/product/${id}`)
      .then((response) => {
        console.log(response);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  };
  const handleRemove = async () => {
    await axios
      .delete(`${PRODUCT_LIST_API}/product/${id}`)
      .then(() => {
        alert("Remove successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };
  return (
    <>
      <h2>Product Delete</h2>
      <label># </label>
      <input value={product.id}></input>
      <br />
      <label>Name </label>
      <input value={product.name}></input>
      <br />
      <label> Price </label>
      <input value={product.price}></input>
      <br />
      <label>Inventory </label>
      <input value={product.inventory}></input>
      <br />
      <button onClick={handleRemove}>Remove</button>
    </>
  );
}

export default ProductDelete;
