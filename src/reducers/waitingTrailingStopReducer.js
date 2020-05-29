import {DELETE_TRAILING_STOP, GET_WAITING_TRAILING_STOPS, POST_TRAILING_STOP} from "../actions/types";

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
    case DELETE_TRAILING_STOP:
      return {
        ...state,
        waitingTrailingStops: state.waitingTrailingStops.filter(
            waitingTrailingStop => waitingTrailingStop.id !== action.payload
        )
      };
    default:
      return state;
  }
}
