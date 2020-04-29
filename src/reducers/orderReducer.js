import { GET_LIMIT_ORDERS } from "../actions/types";

const initialState = {
  orders: [],
  order: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LIMIT_ORDERS:
      return {
        ...state,
        orders: action.payload
      };
    default:
      return state;
  }
}
