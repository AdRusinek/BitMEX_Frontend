import { GET_WAITING_TRAILING_STOPS } from "../actions/types";

const initialState = {
  waitingTrailingStops: [],
  waitingTrailingStop: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_WAITING_TRAILING_STOPS:
      return {
        ...state,
        waitingTrailingStops: action.payload
      };
    default:
      return state;
  }
}
