import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import { counter } from "./reducers";

export default createStore(counter, applyMiddleware(Thunk))