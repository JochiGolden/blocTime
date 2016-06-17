import React from "react";
import {render} from "react-dom";
import routes from "./config/router";
require("!style!css!./main.css");
//var React = require('react');
//var ReactDOM = require('react-dom');
//var routes = require('./config/router');

render(
  routes,
  document.getElementById('app')
);