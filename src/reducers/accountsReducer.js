import {POST_ACCOUNT, GET_ACCOUNTS} from "../actions/types";

const initialState = {
    accounts: [],
    account: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload
            };
        case POST_ACCOUNT:
            return {
                ...state,
                accounts: [action.payload, ...state.accounts]
            };
        default:
            return state;
    }
}
