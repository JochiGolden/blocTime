import React from "react";
import {render} from "react-dom";
import {Router, Route, IndexRoute} from "react-router";
import {Provider} from "react-redux";

import store, {history} from "./store";
import Main from "./Main";

require("!style!css!./animate.css");

var routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main} />
    </Router>
  </Provider>
);

render(
  routes,
  document.getElementById('app')
);