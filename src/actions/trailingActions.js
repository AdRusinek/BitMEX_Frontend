import axios from "axios";
import {POST_TRAILING_STOP, GET_ERRORS, GET_WAITING_TRAILING_STOPS} from "./types";

export const getWaitingTrailingStops = (id) => async dispatch => {
  const res = await axios.get(`/api/trailing-stops/get-waiting-trailing-stops/${id}`);
  dispatch({
    type: GET_WAITING_TRAILING_STOPS,
    payload: res.data
  });
};

export const postTrailingStop = (trailing, closeModal, id) => async dispatch => {
  try {
    const res = await axios.post(`/api/trailing-stops/set-trailing/${id}`, trailing);
    closeModal();
    dispatch({
      type: POST_TRAILING_STOP,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
