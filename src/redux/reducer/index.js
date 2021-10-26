import { combineReducers } from "redux";
import counter from "./CounterReducer";
import todo from "./TodoReducer";
const rootreducer=combineReducers({counter,todo})

export default rootreducer;