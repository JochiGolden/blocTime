import { connect } from 'react-redux';
import Main from '../components/Main';
import * as actions from '../actionCreators';

function mapStateToProps(state) {
  return {
    setTime: state.setTime
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setInitialTime : function(currentOption) {
      dispatch(actions.setInitialTime(currentOption));
    },
    startCount : function() {
      dispatch(actions.startCount());
    },
    replaceDigit : function() {
      dispatch(actions.replaceDigit());
    },
    countFinished : function() {
      dispatch(actions.countFinished());
    }
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;