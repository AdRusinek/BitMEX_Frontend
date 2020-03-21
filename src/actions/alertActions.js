import axios from "axios";
import {GET_ALERTS, GET_ERRORS} from "./types";

export const getAlerts = () => async dispatch => {
    const res = await axios.get("/api/alerts/get-alerts");
    dispatch({
        type: GET_ALERTS,
        payload: res.data
    });
};

export const setAlert = (newAlert, history) => async dispatch => {
    try {
        await axios.post("/api/alerts/setAlert", newAlert);
        history.push("/credentials");
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
