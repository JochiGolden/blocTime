import {connect} from 'react-redux';
import Main from './Main';
import * as actions from '../actionCreators';

// Pass props from store to Main.js
// Connect actionCreators

function mapStateToProps(state) {
  return {
    setTime: state.setTime
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTimer : function(startTime) {
      dispatch(actions.setTimer(startTime));
    },
    countDown : function(currentTime) {
      dispatch(actions.countDown(currentTime));
    }
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;