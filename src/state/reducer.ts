import { handleActions } from "redux-actions";
import { LOAD_DATA, SET_API_ERROR, SET_LOADING } from "./action-types";
import { IGarments } from "./types";

const defaultState: IGarments = {
  apiError: undefined,

  loading: false,
  data: [],
};

const reducer = handleActions(
  {
    //@ts-ignore
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
  },
  defaultState
);

export default reducer;
