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
    setInitialTime : function(startTime) {
      dispatch(actions.setInitialTime(startTime));
    },
    countDown : function(totalTime) {
      dispatch(actions.countDown(totalTime));
    },
    countFinished : function() {
      dispatch(actions.countFinished());
    }
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;