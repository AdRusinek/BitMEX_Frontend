import { GET_CREDENTIALS } from "../actions/types";

const initialState = {
    credentials: [],
    credential: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CREDENTIALS:
            return {
                ...state,
                credentials: action.payload
            };
        default:
            return state;
    }
}
