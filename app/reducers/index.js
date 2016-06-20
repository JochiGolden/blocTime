import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import setTime from './setTime';

// !NOTE Individual reducers correspond to different
//    properties of the global state object (store).
//    They do NOT correspond to actions

const rootReducer = combineReducers({
  setTime,
  routing: routerReducer
});

export default rootReducer;