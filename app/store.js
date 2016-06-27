import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/index';

const defaultState = {
  setTime : {
    "timerOptions" : {
      "pomodoro" : { label : "Pomodoro", startTime : [0, 5, 10, 10] },
      "shortBreak" : { label : "Short Break", startTime : [0, 5, 10, 10] },
      "longBreak" : { label : "Long Break", startTime : [0, 5, 10, 10] }
    },
    "currentTime" : [0, 5, 10, 10],
    "countingDown" : [false, false, false, false],
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