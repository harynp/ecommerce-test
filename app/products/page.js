"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Product from "../components/product/product";
import { GET_PRODUCTS } from "../api/index";

export default function ProductListPage({ styles }) {
  const [productsList, setProductsList] = useState([]);

  const handleError = (error) => {
    console.error("Error fetching products:", error);
    setProductList([]);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(GET_PRODUCTS);
        setProductsList(response.data);
      } catch (error) {
        handleError(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.grid}>
      {productsList.map((product) => (
        <Product key={product.id} product={product} styles={styles} />
      ))}
    </div>
  );
}
