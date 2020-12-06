import {applyMiddleware, createStore, compose} from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import logger from "redux-logger";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,storeEnhancers(applyMiddleware(thunk, logger)));

export default store;
