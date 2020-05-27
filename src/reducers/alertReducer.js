import {POST_ALERT, GET_ALERTS, DELETE_ALERT} from "../actions/types";

const initialState = {
    customAlerts: [],
    customAlert: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALERTS:
            return {
                ...state,
                customAlerts: action.payload
            };
        case POST_ALERT:
            return {
                ...state,
                customAlerts: [action.payload, ...state.customAlerts]
            };
        case DELETE_ALERT:
            return {
                ...state,
                customAlerts: state.customAlerts.filter(customAlert => customAlert.id !== action.payload)
            };
        default:
            return state;
    }
}
