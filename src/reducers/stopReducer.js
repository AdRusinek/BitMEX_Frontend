import { GET_STOPS } from "../actions/types";

const initialState = {
  stops: [],
  stop: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STOPS:
      return {
        ...state,
        stops: action.payload
      };
    default:
      return state;
  }
}
