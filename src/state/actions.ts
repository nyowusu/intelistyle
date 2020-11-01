import { Dispatch } from "redux";
import { createAction } from "redux-actions";

import { LOAD_DATA, SET_API_ERROR, SET_LOADING } from "./action-types";

export const loadData = createAction(LOAD_DATA);
export const setLoading = createAction(SET_LOADING);
export const setApiError = createAction(SET_API_ERROR);

export const fetchData = () => async (dispatch: Dispatch): Promise<any> => {
  try {
    // dispatch loading
    dispatch(setLoading(true));

    // clear api error
    dispatch(setApiError(undefined));

    // fetch data
    const response = await fetch(
      "https://s3-eu-west-1.amazonaws.com/stylr-ai-engine-srv-data/srv/data/archive/zalando-women-07-10-2017/garment_items.jl"
    );

    const data = await response.text();

    // set data
    dispatch(loadData(data));

    return data;
  } catch (error) {
    // set error
    dispatch(setApiError(error));
  } finally {
    dispatch(setLoading(false));
  }
};
