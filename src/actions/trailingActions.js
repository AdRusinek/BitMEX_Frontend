import axios from "axios";
import {POST_TRAILING_STOP, GET_ERRORS, GET_WAITING_TRAILING_STOPS, DELETE_TRAILING_STOP} from "./types";
import  {clearErrors} from "../actions/commonActions";

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
    dispatch(clearErrors());
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const deleteTrailingStop = (trailing_id, account_id) => async dispatch => {
  if (
      window.confirm(
          `Jesteś pewien, że chcesz usunąć ten czekający Trailing Stop? `
      )
  ) {
    await axios.delete(`/api/trailing-stops/${account_id}/${trailing_id}`);
    dispatch({
      type: DELETE_TRAILING_STOP,
      payload: trailing_id
    });
  }
};
