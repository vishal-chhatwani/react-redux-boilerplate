import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers/rootReducer";
import rootSaga from "./middleware/sagas/rootSaga";

// create the sage middleware
const sagaMiddleware = createSagaMiddleware();

// create redux middleware
const middleware = applyMiddleware(sagaMiddleware);

export default createStore(reducer, composeWithDevTools(middleware));

// run the saga middleware
sagaMiddleware.run(rootSaga);
