import axios from "axios";
import { GET_STOP_ORDERS } from "./types";

export const getStopOrders = (id) => async dispatch => {
  const res = await axios.get(`/api/orders/get-stop-orders/${id}`);
  dispatch({
    type: GET_STOP_ORDERS,
    payload: res.data
  });
};
