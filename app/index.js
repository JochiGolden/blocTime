import React from "react";
import {render} from "react-dom";
import {Router, IndexRoute} from "react-router";
import {Provider} from "react-redux";

import store, {history} from "./store";
import Main from "./Main";

require("!style!css!./animate.css");

var routes = (
  <Provider store={store}>
    <Router history={history}>
      <IndexRoute component={Main} />
    </Router>
  </Provider>
);

render(
  routes,
  document.getElementById('app')
);