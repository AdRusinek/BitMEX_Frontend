import axios from "axios";
import { GET_ERRORS } from "./types";

export const createTrailing = (trailing, history,id) => async dispatch => {
  try {
    await axios.post(`/api/trailing-stops/set-trailing/${id}`, trailing);
    history.push(`/dashboard/${id}`);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
