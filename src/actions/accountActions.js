import axios from "axios";
import {POST_ACCOUNT, GET_ACCOUNTS, GET_ERRORS, DELETE_ACCOUNT} from "./types";

export const getAccounts = () => async dispatch => {
    const res = await axios.get("/api/accounts/get-accounts");
    dispatch({
        type: GET_ACCOUNTS,
        payload: res.data
    });
};

export const postAccount = (newAccount, closeModal) => async dispatch => {
    try {
        const res = await axios.post("/api/accounts/add", newAccount);
        closeModal();
        dispatch({
            type: POST_ACCOUNT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

export const deleteAccount = id => async dispatch => {
    if (window.confirm("Jesteś pewien, że chcesz usunąć to konto?")) {
        await axios.delete(`/api/accounts/${id}`);
        dispatch({
            type: DELETE_ACCOUNT,
            payload: id
        });
    }
};
