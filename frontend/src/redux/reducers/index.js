import {combineReducers} from "redux";
import hotdogReducer from "./hotdog.reducer";
import modalReducer from "./modal.reducer";
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({hotdogReducer, modalReducer, form: reduxFormReducer})

export default rootReducer;
