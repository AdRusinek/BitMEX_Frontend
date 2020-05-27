import axios from "axios";
import {POST_ALERT, GET_ALERTS, GET_ERRORS, DELETE_ALERT} from "./types";

export const getAlerts = () => async dispatch => {
    const res = await axios.get("/api/alerts/get-alerts");
    dispatch({
        type: GET_ALERTS,
        payload: res.data
    });
};

export const postAlert = (newAlert, closeModal) => async dispatch => {
    try {
        const res = await axios.post("/api/alerts/set-alert", newAlert);
        closeModal();
        dispatch({
            type: POST_ALERT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

export const deleteAlert = id => async dispatch => {
    if (window.confirm("Jesteś pewien, że chcesz usunąć ten alert?")) {
        await axios.delete(`/api/alerts/${id}`);
        dispatch({
            type: DELETE_ALERT,
            payload: id
        });
    }
};
