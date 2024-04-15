import React, { useEffect, useState } from "react";
import axios from "axios";
import { PRODUCT_LIST_API } from "../constant/AppConstant";
import { useParams } from "react-router-dom";

function ProductEdit() {
  const [product, setProduct] = useState({});
  const { id } = useParams("id");
  useEffect(() => {
    fetchExistingProduct(id);
  }, [id]);
  const fetchExistingProduct = async (id) => {
    await axios
      .get(`${PRODUCT_LIST_API}/product/${id}`)
      .then((response) => {
        console.log(response);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    axios
      .put(`${PRODUCT_LIST_API}/product/${id}`, product)
      .then(() => {
        alert("Edit product successfully!");
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };
  return (
    <>
      <h2>Edit Existing Product</h2>
      <form>
        <input type="hidden" name="#" readOnly value={product?.id} />
        <label htmlFor="name">Name </label>
        <input
          onChange={handleChange}
          value={product?.name}
          type="text"
          name="name"
        />
        <br />
        <br />
        <label htmlFor="">Price </label>
        <input
          onChange={handleChange}
          value={product?.price}
          type="text"
          name="price"
        />
        <br />
        <br />
        <label htmlFor="">Inventory </label>
        <input
          onChange={handleChange}
          value={product?.inventory}
          type="text"
          name="inventory"
        />
        <br />
        <br />
        <input type="button" onClick={handleSubmit} value="Edit" />
      </form>
    </>
  );
}

export default ProductEdit;
