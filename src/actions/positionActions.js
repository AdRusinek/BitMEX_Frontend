import axios from "axios";
import {GET_ERRORS, GET_POSITIONS} from "./types";

export const getPositions = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/positions/get-positions/${id}`);
        dispatch({
            type: GET_POSITIONS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};
