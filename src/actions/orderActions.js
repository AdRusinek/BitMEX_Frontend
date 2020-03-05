import axios from "axios";
import { GET_ORDERS } from "./types";

export const getOrdersLimit = () => async dispatch => {
  const res = await axios.get("/api/orders/get-orders/new/Limit");
  dispatch({
    type: GET_ORDERS,
    payload: res.data
  });
};
