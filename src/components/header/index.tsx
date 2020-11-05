import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IGarments } from "../../state/types";
import { setSearchValue } from "../../state/actions";

import "./styles.css";
import useDebounce from "../../lib/debounce";

export default function Header() {
  const dispatch = useDispatch();

  const { loading } = useSelector(({ loading }: IGarments) => ({ loading }));

  const [value, setValue] = useState("");

  const debounce = useDebounce(value, 1500);

  function handleSearchInput(e: FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  useEffect(() => {
    dispatch(setSearchValue(value));

    return () => {};
  }, [value, dispatch]);

  return (
    <div className="menu-container">
      <div className="title-container">
        <span className="title">choose your style</span>
      </div>
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          value={value}
          onChange={handleSearchInput}
          className="search"
          disabled={loading}
          placeholder={
            loading
              ? " please wait we are preparing the store"
              : " search for garments: e.g. black dress"
          }
        />
      </div>
    </div>
  );
}
