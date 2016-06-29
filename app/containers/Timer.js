import React from 'react';
import { connect } from 'react-redux';
import { countFinished, replaceDigit, playADing } from '../actionCreators';

import SetInterval from './SetInterval';

class Timer extends React.Component {
  
  componentDidMount() {
    this.forceUpdate();
  }
  
  render() {
    const { klass, currentTime, countingDown, countFinished, replaceDigit, playADing } = this.props;
    
    let Counter = SetInterval({ klass, currentTime, countingDown, countFinished, replaceDigit, playADing });
    
    return <Counter />;

  }
}

function mapStateToProps(state) {
  return {
    currentTime : state.setTime.currentTime,
    countingDown : state.setTime.countingDown
  };
}


function mapDispatchToProps(dispatch) {
  return {
    countFinished : function() {
      dispatch(countFinished());
    },
    replaceDigit : function() {
      dispatch(replaceDigit());
    },
    playADing : function() {
      dispatch(playADing());
    },
    logPomodoro : function() {
      dispatch(logPomodoro());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
