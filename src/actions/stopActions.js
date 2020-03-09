import axios from "axios";
import { GET_STOPS } from "./types";

export const getStops = (id) => async dispatch => {
  const res = await axios.get(`/api/orders/get-orders/new/Stop/${id}`);
  dispatch({
    type: GET_STOPS,
    payload: res.data
  });
};
