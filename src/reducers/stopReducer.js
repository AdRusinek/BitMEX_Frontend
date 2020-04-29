import { GET_STOP_ORDERS } from "../actions/types";

const initialState = {
  stops: [],
  stop: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STOP_ORDERS:
      return {
        ...state,
        stops: action.payload
      };
    default:
      return state;
  }
}
