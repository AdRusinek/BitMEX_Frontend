import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import orderReducer from "./orderReducer";
import positionReducer from "./positionReducer";
import stopReducer from "./stopReducer";
import waitingTrailingStopReducer from "./waitingTrailingStopReducer";
import securityReducer from "./securityReducer";
import credentialsReducer from "./credentialsReducer";

export default combineReducers({
  errors: errorReducer,
  order: orderReducer,
  stop: stopReducer,
  position: positionReducer,
  waitingTrailingStop: waitingTrailingStopReducer,
  security: securityReducer,
  credential: credentialsReducer
});
