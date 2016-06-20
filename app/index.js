import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute} from "react-router";
import {Provider} from "react-redux";

require("!style!css!./main.css");

import store, {history} from "./store";
import App from "./components/App";

var routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

render(
  routes,
  document.getElementById('app')
);