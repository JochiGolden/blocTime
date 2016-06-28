import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/index';

const defaultState = {
  setTime : {
    "timerOptions" : {
      "pomodoro" : { label : "Pomodoro", startTime : "0030" },
      "shortBreak" : { label : "Short Break", startTime : "0500" },
      "longBreak" : { label : "Long Break", startTime : "3000" }
    },
    "currentTime" : [0, 1, 0, 0],
    "countingDown" : false,
    "currentOption" : "pomodoro",
    "onBreak" : false,
    "pomodorosCompleted" : 0
  }
};

// window... is middleware inspector and logger for redux

const store = createStore(
  rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension()
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;