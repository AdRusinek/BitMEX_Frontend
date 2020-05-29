import {POST_ACCOUNT, GET_ACCOUNTS, DELETE_ACCOUNT} from "../actions/types";

const initialState = {
    accounts: [],
    account: {}
};

export default function (state = initialState, action) {
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
        case DELETE_ACCOUNT:
            return {
                ...state,
                accounts: state.accounts.filter(account => account.id !== action.payload)
            };
        default:
            return state;
    }
}
