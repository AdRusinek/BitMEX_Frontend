import axios from "axios";
import { GET_WAITING_TRAILING_STOPS } from "./types";

export const getWaitingTrailingStops = (id) => async dispatch => {
  const res = await axios.get(`/api/trailing-stops/get-waiting-trailing-stops/${id}`);
  dispatch({
    type: GET_WAITING_TRAILING_STOPS,
    payload: res.data
  });
};
