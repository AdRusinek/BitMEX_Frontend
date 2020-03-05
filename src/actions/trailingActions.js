import axios from "axios";
import { GET_ERRORS } from "./types";

export const createTrailing = (trailing, history) => async dispatch => {
  try {
    await axios.post("/api/trailing-stops/set-trailing", trailing);
    history.push("/dashboard");
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
