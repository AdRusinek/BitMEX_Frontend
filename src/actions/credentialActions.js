import axios from "axios";
import {GET_CREDENTIALS, GET_ERRORS} from "./types";

export const getCredentials = () => async dispatch => {
    const res = await axios.get("/api/credentials/get-credentials");
    dispatch({
        type: GET_CREDENTIALS,
        payload: res.data
    });
};

export const createCredentials = (newCredentials, history) => async dispatch => {
    try {
        await axios.post("/api/credentials/add", newCredentials);
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
