import { stat } from "fs";
import { handleActions } from "redux-actions";
import {
  LOAD_DATA,
  SET_API_ERROR,
  SET_LOADING,
  SET_SEARCH_VALUE,
} from "./action-types";
import { IGarments } from "./types";

const defaultState: IGarments = {
  apiError: undefined,

  loading: false,
  data: [],

  searchValue: "",
};

//@ts-ignore
const reducer = handleActions(
  {
    [LOAD_DATA]: (state, { payload }) => ({
      ...state,
      data: payload,
    }),
    [SET_LOADING]: (state, { payload = false }) =>
      ({
        ...state,
        loading: payload,
      } as IGarments),
    [SET_API_ERROR]: (state, { payload }) =>
      ({
        ...state,
        apiError: payload,
      } as IGarments),
    [SET_SEARCH_VALUE]: (state, { payload }) => ({
      ...state,
      searchValue: payload,
    }),
  },
  defaultState
);

export default reducer;
