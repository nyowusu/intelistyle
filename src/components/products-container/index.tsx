import React from "react";
import { IProduct } from "../../types/global";
import Product from "../garment";

interface Products {
  products?: IProduct[];
  search?: string;
}

export default function ProductsContainer({ products, search }: Products) {
  return (
    <div className="results">
      {products?.map((garment) => (
        <Product {...garment} key={garment.productId} />
      ))}
    </div>
  );
}
