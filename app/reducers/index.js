import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import setTime from './setTime';
import currentTask from './currentTask';
import tasks from './tasks';

// !NOTE Individual reducers correspond to different
//    properties of the global state object (store).
//    They do NOT correspond to actions

const rootReducer = combineReducers({
  setTime,
  currentTask,
  tasks,
  routing: routerReducer
});

export default rootReducer;