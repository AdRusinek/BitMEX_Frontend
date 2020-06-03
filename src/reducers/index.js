import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import orderReducer from "./orderReducer";
import positionReducer from "./positionReducer";
import stopReducer from "./stopReducer";
import waitingTrailingStopReducer from "./waitingTrailingStopReducer";
import securityReducer from "./securityReducer";
import credentialsReducer from "./accountsReducer";
import alertReducer from "./alertReducer";
import waitingStopMarketReducer from "./waitingStopMarketReducer";


export default combineReducers({
  errors: errorReducer,
  order: orderReducer,
  stop: stopReducer,
  position: positionReducer,
  waitingTrailingStop: waitingTrailingStopReducer,
  waitingStopMarket: waitingStopMarketReducer,
  security: securityReducer,
  account: credentialsReducer,
  customAlert: alertReducer,

});
