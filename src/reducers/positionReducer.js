import { GET_POSITIONS } from "../actions/types";

const initialState = {
  positions: [],
  position: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSITIONS:
      return {
        ...state,
        positions: action.payload
      };
    default:
      return state;
  }
}
