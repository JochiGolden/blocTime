import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/index';

const defaultState = {
  setTime : {
    "startTime" : {
      "pomodoro" : 25,
      "shortBreak" : 5,
      "longBreak" : 30
    },
    "duration" : null,
    "totalTime" : null,
    "currentTime" : 0
  }
};

// window... is middleware inspector and logger for redux

const store = createStore(
  rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension()
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;