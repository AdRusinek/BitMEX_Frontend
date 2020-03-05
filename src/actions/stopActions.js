import axios from "axios";
import { GET_STOPS } from "./types";

export const getStops = () => async dispatch => {
  const res = await axios.get("/api/orders/get-orders/new/Stop");
  dispatch({
    type: GET_STOPS,
    payload: res.data
  });
};
