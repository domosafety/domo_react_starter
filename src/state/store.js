//see https://github.com/LogRocket/redux-logger for logging options
// eslint-disable-next-line no-unused-vars

import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare];

export const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleWare.run(rootSaga);
