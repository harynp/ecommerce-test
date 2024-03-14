import Image from "next/image";
import productStyle from "./product.module.css";
import { formatRupiah } from "../../helpers/index";

export default function Product({ styles, product }) {
  const { imageUrl, routePath, title, price, stock } = product;
  const altText = stock === 0 ? `${title} (Out of Stock)` : title;

  return (
    <div className={productStyle.card}>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={`${imageUrl}?w=320&h=240&fm=auto&fit=crop`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${imageUrl}?w=640&h=480&fm=auto&fit=crop`}
        />
        <img
          style={{
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            objectFit: "contain",
          }}
          src={imageUrl}
          alt={altText}
          width="100%"
        />
      </picture>

      <div className={productStyle.cardDescription}>
        <p id="title">{title}</p>
        <div className={productStyle.cardInfo}>
          <p className={productStyle.priceText}>{formatRupiah(price)}</p>
          <p className={productStyle.stockText}>Stok : {stock}</p>
        </div>
        {stock > 0 && (
          <div className={productStyle.btnContainer}>
            <a href={routePath} target="_blank" rel="noopener noreferrer">
              <p className={productStyle.btnDetail}>Checkout</p>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
