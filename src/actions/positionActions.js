import axios from "axios";
import { GET_POSITIONS } from "./types";

export const getPositions = (id) => async dispatch => {
  const res = await axios.get(`/api/positions/get-positions/${id}`);
  dispatch({
    type: GET_POSITIONS,
    payload: res.data
  });
};
