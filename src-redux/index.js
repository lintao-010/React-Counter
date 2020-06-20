import React from "react";
import ReactDom from "react-dom";

import App from "./components/App";
import store from "./redux/store";


const render = () => {
    ReactDom.render(<App store={store} />, document.getElementById("root"))
}

render()

store.subscribe(render)