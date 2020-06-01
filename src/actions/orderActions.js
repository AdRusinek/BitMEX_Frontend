import axios from "axios";
import {GET_ERRORS, GET_LIMIT_ORDERS} from "./types";

export const getLimitOrders = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/orders/get-limit-orders/${id}`);
        dispatch({
            type: GET_LIMIT_ORDERS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};
