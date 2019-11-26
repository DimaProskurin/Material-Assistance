import {combineReducers} from "redux";
import fetchReducer from "./fetch";

export default combineReducers({fetch: fetchReducer})