import {combineReducers} from "redux";
import hotdogReducer from "./hotdog.reducer";
import modalReducer from "./modal.reducer";
import { reducer as reduxFormReducer } from 'redux-form';
import {tabsReducer} from "./tabs.reducer";

const rootReducer = combineReducers({hotdogReducer, modalReducer, form: reduxFormReducer, tabsReducer})

export default rootReducer;
