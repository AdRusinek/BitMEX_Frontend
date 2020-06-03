import {DELETE_STOP_MARKET, GET_WAITING_STOP_MARKETS, POST_STOP_MARKET} from "../actions/types";

const initialState = {
    waitingStopMarkets: [],
    waitingStopMarket: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_WAITING_STOP_MARKETS:
            return {
                ...state,
                waitingStopMarkets: action.payload
            };
        case POST_STOP_MARKET:
            return {
                ...state,
                waitingStopMarkets: [action.payload, ...state.waitingStopMarkets]
            };
        case DELETE_STOP_MARKET:
            return {
                ...state,
                waitingStopMarkets: state.waitingStopMarkets.filter(
                    waitingStopMarket => waitingStopMarket.id !== action.payload
                )
            };
        default:
            return state;
    }
}
