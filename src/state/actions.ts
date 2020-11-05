import { Dispatch } from "redux";
import { createAction } from "redux-actions";

import {
  LOAD_DATA,
  SET_API_ERROR,
  SET_LOADING,
  SET_SEARCH_VALUE,
} from "./action-types";

export const saveGarmentItems = createAction(LOAD_DATA);
export const setLoading = createAction(SET_LOADING);
export const setApiError = createAction(SET_API_ERROR);
export const setSearchValue = createAction(SET_SEARCH_VALUE);

export const fetchData = () => async (dispatch: Dispatch): Promise<any> => {
  try {
    // dispatch loading
    dispatch(setLoading(true));

    // clear api error
    dispatch(setApiError(undefined));

    // fetch data
    const response = await fetch("./data/data.json");

    const data = await response.json();

    dispatch(saveGarmentItems(data));

    return data;
  } catch (error) {
    // set error
    console.log(error.message);
    dispatch(setApiError(error));
  } finally {
    dispatch(setLoading(false));
  }
};
