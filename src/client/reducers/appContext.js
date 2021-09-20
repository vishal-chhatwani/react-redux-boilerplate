import { combineReducers } from "redux";

export const initState = {
  appConfig: {},
  appState: {},
};

const appState = (state = initState.appState, action = {}) => {
  switch (action.type) {
    case "RECEIVED_INIT_APP_DATA":
      // Return new state
      return state;
    default:
      return state;
  }
};

const appConfig = (state = initState.appConfig, action = {}) => {
  switch (action.type) {
    case "RECEIVED_INIT_APP_DATA":
      // Return new state
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  appState,
  appConfig,
});
