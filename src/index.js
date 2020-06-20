import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";

import App from "./components/App";
import { counter } from "./redux/reducers";

const store = createStore(counter)

const render = () => {
    ReactDom.render(<App store={store} />, document.getElementById("root"))
}

render()

store.subscribe(render)