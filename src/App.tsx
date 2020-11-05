import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BarLoader } from "react-spinners";

import "./App.css";

import { IGarments } from "./state/types";

import ProductsContainer from "./components/products-container";
import EmptyResults from "./components/empty-results";
import { fetchData, setSearchValue } from "./state/actions";
import Header from "./components/header";

function App() {
  const dispatch = useDispatch();

  const { loading } = useSelector(({ loading }: IGarments) => ({
    loading,
  }));

  useEffect(() => {
    async function loadData() {
      await dispatch(fetchData() as any);

      dispatch(setSearchValue(""));
    }

    loadData();

    return () => {};
  }, []);

  return (
    <div className="main">
      <Header />
      <div className="loading">
        <BarLoader loading={loading} />
      </div>
      {(!loading && <ProductsContainer />) || (
        <EmptyResults
          text={loading ? "please wait we are preparing the store" : ""}
        />
      )}
    </div>
  );
}

export default App;
