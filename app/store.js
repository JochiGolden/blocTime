import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/index';

const defaultState = {
  setTime : {
    "timerOptions" : {
      "pomodoro" : "pomodoro",
      "shortBreak" : "shortBreak",
      "longBreak" : "longBreak",
    },
    "currentTime" : [2, 5, 10, 10],
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