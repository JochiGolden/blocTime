import "babel-polyfill";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import { Router, Route, hashHistory } from "react-router";

import Timer from './components/Timer.jsx';
import CurrentTaskContainer from './components/CurrentTaskContainer.jsx';
import TaskList from './components/TaskList.jsx';

class App extends Component {
  render() {
    return(
      <div className="container main">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="row">

                <Timer />

            </div>
            <div className="row">

                <CurrentTaskContainer  />

            </div>
            <div className="row">

              <TaskList />

            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App } />
    </Router>
  </Provider>
  ,
  document.getElementById('main')
);
