import React from "react";
import { IProduct } from "../../types/global";
import "./styles.css";

export default function Product(product: IProduct) {
  return (
    <div className="container">
      <div className="image-container">
        <a href={product.url}>
          <img
            src={product.images[0].url}
            alt={product.title}
            className="image"
          />
        </a>
      </div>
      <div className="product-details">
        <span>{product.brand}</span>
        <span>
          {product.productTypes.reduce((acc, next) => {
            acc = `${acc} ${next}`;
            return acc;
          }, "" as string)}
        </span>
        <span>{`£${product.prices}`}</span>
      </div>
    </div>
  );
}
