import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BarLoader } from "react-spinners";

import "./App.css";

import { IGarments } from "./state/types";

import sample from "./data/sample.json";
import { IProduct, IProducts } from "./types/global";
import ProductsContainer from "./components/products-container";
import EmptyResults from "./components/empty-results";
import { setLoading } from "./state/actions";

function App() {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState<IProduct[]>();
  const [garments, setGarments] = useState<IProduct[]>();

  const { loading } = useSelector(({ loading }: IGarments) => ({
    loading,
  }));

  function handleSearchInput(e: FormEvent<HTMLInputElement>) {
    setSearchValue(e.currentTarget.value);
  }

  function handleSearch(data: IProduct, search: string) {
    const types = data.productTypes.filter((type) =>
      type.toLowerCase().includes(search)
    );

    return !!types.length;
  }

  useEffect(() => {
    dispatch(setLoading(true));

    const data = sample.map((d: IProducts) => {
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

    setProducts(data);
    setSearchValue("");

    dispatch(setLoading(false));

    return () => {};
  }, []);

  useEffect(() => {
    if (searchValue.trim()) {
      const searchValues = searchValue.split(" ");

      let filteredData = products;

      console.log(searchValues);

      searchValues.forEach((search) => {
        filteredData = filteredData?.filter((data) =>
          handleSearch(data, search.trim().toLowerCase())
        );

        console.log(filteredData);
      });

      setGarments(filteredData);
    }

    if (!searchValue.trim()) setGarments(products);

    return () => {};
  }, [searchValue]);

  useEffect(() => {
    setGarments(products);

    return () => {};
  }, [products]);

  return (
    <>
      <div className="menu-container">
        <span className="title">choose your style</span>
      </div>
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          value={searchValue}
          onChange={handleSearchInput}
          className="search"
          disabled={loading}
          placeholder={
            loading
              ? " please wait we are preparing the store"
              : " search for garments: e.g. black dress"
          }
        />
        <div className="loading">
          <BarLoader loading={loading} />
        </div>
        {(garments?.length && (
          <ProductsContainer products={garments} search={searchValue} />
        )) || <EmptyResults />}
      </div>
    </>
  );
}

export default App;
