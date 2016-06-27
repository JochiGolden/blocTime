import { connect } from 'react-redux'
import * as actions from '../actionCreators'
import Digit from '../components/Digit'

const getVisibleDigit = (value, index, currentTime) => {

  return value === currentTime[index] ? true : false;
  
}

const mapStateToProps = (state, ownProps) => {
  return {
    visible: getVisibleDigit(ownProps.value, ownProps.index, state.setTime.currentTime),
    value: ownProps.value,
    index: ownProps.index,
    currentTime: state.setTime.currentTime,
    countingDown: state.setTime.countingDown
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    replaceDigit : function(totalTime) {
      dispatch(actions.replaceDigit(totalTime));
    },
    zeroed : function(index) {
      dispatch(actions.zeroed(index));
    }
  }
}

const VisibleDigit = connect(mapStateToProps, mapDispatchToProps)(Digit);

export default VisibleDigit