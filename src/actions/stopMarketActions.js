import axios from "axios";
import {
    DELETE_STOP_MARKET,
    GET_ERRORS,
    GET_WAITING_STOP_MARKETS,
    POST_STOP_MARKET,
} from "./types";
import {clearErrors} from "./commonActions";


export const getWaitingStopMarkets = (id) => async dispatch => {
    const res = await axios.get(`/api/stop-market-orders/get-waiting-stop-markets/${id}`);
    dispatch({
        type: GET_WAITING_STOP_MARKETS,
        payload: res.data
    });
};

export const postStopMarket = (stop_Market_Order, closeModal, id) => async dispatch => {
    try {
        const res = await axios.post(`/api/stop-market-orders/set-stop-market/${id}`, stop_Market_Order);
        closeModal();
        dispatch({
            type: POST_STOP_MARKET,
            payload: res.data
        });
        dispatch(clearErrors());
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

export const deleteStopMarket = (stop_market_id, account_id) => async dispatch => {
    if (
        window.confirm(
            `Jesteś pewien, że chcesz usunąć to czekające zlecenie 'Stop Market'? `
        )
    ) {
        await axios.delete(`/api/stop-market-orders/${account_id}/${stop_market_id}`);
        dispatch({
            type: DELETE_STOP_MARKET,
            payload: stop_market_id
        });
    }
};
