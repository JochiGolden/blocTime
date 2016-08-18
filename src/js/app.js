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
      <div className="row row-center main">
        <div className="col col-center" style={{ width: "600px" }}>

          <Timer />

          <CurrentTaskContainer  />

          <TaskList />

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
