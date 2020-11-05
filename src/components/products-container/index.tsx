import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { getGarmentsThatMarch } from "../../lib/products/filters";
import { IGarments } from "../../state/types";

import { IProduct, IProducts } from "../../types/global";
import Product from "../garment";

export default function ProductsContainer() {
  const { data, searchValue } = useSelector(
    ({ data, searchValue }: IGarments) => ({
      data,
      searchValue,
    })
  );

  const formattedProducts: IProduct[] = data.map((d: IProducts) => {
    const product: IProduct = {
      productId: d.product_id,
      url: d.url,
      brand: d.brand,
      gender: d.gender,
      images: d.images,
      prices: d.price,
      title: d.product_title,
      productTypes: d.product_title.split("-").map((title) => title.trim()),
    };
    return product;
  });

  const products = getGarmentsThatMarch({
    products: formattedProducts,

    search: searchValue,
  });

  const initialEndPosition = products?.length > 20 ? 20 : products.length;

  const initialList = products?.slice(0, initialEndPosition) || [];

  const [items, setItems] = useState<IProduct[]>(() =>
    initialList ? initialList : []
  );
  const [currentPosition, setCurrentPosition] = useState(initialEndPosition);

  function getMoreData() {
    const nextItems = items.concat(
      products?.slice(currentPosition, currentPosition + 20) || []
    );
    setItems(nextItems);
    setCurrentPosition((prevState) => prevState + 20);
  }

  return (
    <div className="results">
      <InfiniteScroll
        dataLength={items?.length}
        next={getMoreData}
        hasMore={items?.length < ((products as IProduct[]) || []).length}
        loader={<h3>Loading ...</h3>}
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products?.map((garment, index) => (
          <Product {...garment} key={`${garment.productId}-${index}`} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
