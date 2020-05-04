import { GET_WAITING_TRAILING_STOPS, POST_TRAILING_STOP } from "../actions/types";

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
    case POST_TRAILING_STOP:
      return {
        ...state,
        waitingTrailingStops: [action.payload, ...state.waitingTrailingStops]
      };
    default:
      return state;
  }
}
