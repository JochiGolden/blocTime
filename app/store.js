import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/index';

const defaultState = {
  setTime : {
    "timerOptions" : {
      "pomodoro" : { label : "Pomodoro", startTime : "0005" },
      "shortBreak" : { label : "Short Break", startTime : "0500" },
      "longBreak" : { label : "Long Break", startTime : "3000" }
    },
    "currentTime" : [0, 0, 0, 1],
    "countingDown" : false,
    "currentOption" : "pomodoro",
    "onBreak" : false
  },
  currentTask : {
    "title" : "Try Out GIMP",
    "text" : "Fiddle around a bit more and work through some tutorials",
    "pomodoros" : 2
  },
  tasks : [
    { "title" : "Eat A Bunch of Cereal",
      "text" : "Cereal is delicious, and a good source of engery.",
      "pomodoros" : 4,
      "id" : 1 },
    { "title" : "Debug This Program",
      "text" : "Figure out the weirdness with your setInterval container once and for all.",
      "pomodoros" : 0,
      "id" : 2 },
    { "title" : "Read the React DOCs",
      "text" : "Take the time to grasp the fundamentals instead of rushing into a pile of mistakes and wasting hours with guess-and-check",
      "pomodoros" : 1,
      "id" : 3 }
  ]
};

// window... is middleware inspector and logger for redux

const store = createStore(
  rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension()
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;