"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";

import Image from "next/image";
import { GET_PRODUCTS } from "../../api/index";
import { formatRupiah } from "../../helpers/index";
import styles from "./page.module.css";

export default function ProductDetail({ params }) {
  const [productDetail, setProductDetail] = useState([]);
  const router = useRouter();
  const handleError = (error) => {
    console.error("Error fetching product:", error);
    setProductList({});
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(GET_PRODUCTS + "/" + params.productId);
        setProductDetail(response.data);
      } catch (error) {
        handleError(error);
      }
    };

    fetchProducts();
  }, [params.productId]);

  return (
    <>
      <div className={styles.centeredLayout}>
        <picture>
          <source
            srcSet={`${productDetail.imageUrl} 375w`}
            media="(max-width: 768px)"
          />
          <img
            src={productDetail.imageUrl}
            alt="Image"
            width={425}
            height={425}
          />
          <div className={styles.stockDetail}>
            Stok Tersisa : {productDetail.stock}
          </div>
        </picture>
        <div className={styles.productDetails}>
          <h1 className={styles.productTitle}>{productDetail.title}</h1>
          <div className={styles.productPrice}>
            <h2>{formatRupiah(productDetail.price)}</h2>
          </div>
          <div className={styles.productDescription}>
            <p>{productDetail.description}</p>
          </div>
        </div>
      </div>
      <div className={styles.centeredLayout}>
        <button
          className={styles.btnBack}
          type="button"
          onClick={() => router.push("/")}
        >
          Back Home
        </button>
      </div>
    </>
  );
}
