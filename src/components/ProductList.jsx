import React, { useEffect, useState } from "react";
import axios from "axios";
import { PRODUCT_LIST_API } from "../constant/AppConstant";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    if (product.length === 0) {
      fetchProduct();
    }
  }, [product]);

  const fetchProduct = async () => {
    await axios
      .get(`${PRODUCT_LIST_API}/product`)
      .then((response) => {
        console.log(response);
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  };
  return (
    <>
      <h2>Product</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>inventory</th>
            <th>
              <Link to={"/product/add"}>Add</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {product.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.inventory}</td>
              <Link to={"/product/delete/:id"}>Delete</Link>
              <br />
              <Link to={"/product/edit/:id"}>Edit</Link>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductList;
