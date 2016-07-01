import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/index';

const defaultState = {
  "setTime" : {
    "timerOptions" : {
      "pomodoro" : { label : "Pomodoro", startTime : "0005" },
      "shortBreak" : { label : "Short Break", startTime : "0005" },
      "longBreak" : { label : "Long Break", startTime : "0005" }
    },
    "currentTime" : [0, 0, 0, 5],
    "countingDown" : false,
    "currentOption" : "pomodoro",
    "onBreak" : false,
    "consecutiveBreaks" : 0
  },
  "tasks" : {
    "currentTask" : 0,
    "list" : [
      { "id" : 0,
        "title" : "Default Task",
        "subtasks" : [
          "subtask one",
          "subtask two"
        ],
        "pomodoros" : 1
      },
      { "id" : 1,
        "title" : "Second Task",
        "subtasks" : [
          "subtask one"
        ],
        "pomodoros" : 0
      }
    ],
    "addingTask" : false
  }
};

// window... is middleware inspector and logger for redux

const store = createStore(
  rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension()
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;