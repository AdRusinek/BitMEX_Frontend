import { GET_ALERTS } from "../actions/types";

const initialState = {
    customAlerts: [],
    customAlert: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ALERTS:
            return {
                ...state,
                customAlerts: action.payload
            };
        default:
            return state;
    }
}
