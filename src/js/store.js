import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

const defaultState = {
  "setTime" : {
    "timerOptions" : {
      "pomodoro" : { label : "Pomodoro", startTime : "2500" },
      "shortBreak" : { label : "Short Break", startTime : "0500" },
      "longBreak" : { label : "Long Break", startTime : "3000" }
    },
    "currentTime" : "2500",
    "countingDown" : false,
    "currentOption" : "pomodoro",
    "onBreak" : false,
    "consecutiveBreaks" : 0
  },
  "tasks" : {
    "currentTask" : "",
    "list" : {},
    "addingTask" : false,
    "taskHistory" : 0
  }
};

// window... is middleware inspector and logger for redux

const store = createStore(
  rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension()
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;