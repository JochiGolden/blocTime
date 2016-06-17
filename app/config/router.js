import React from "react";
import * as ReactRouter from "react-router";
var Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory,
    IndexRoute = ReactRouter.IndexRoute;
import Main from "../templates/Main";
import Home from "../templates/Home";

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

module.exports = routes;
