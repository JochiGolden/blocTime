import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { countFinished, replaceDigit, playADing, logPomodoro } from '../actionCreators';
import { timerStyle, digitStyle } from '../styles';
import { getTotalTime, convertTimeString } from '../utils';

import Digit from '../components/Digit';
import Colon from '../components/Colon';

class Timer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    
    const { currentTime, currentOption, startTime, playADing, countFinished, replaceDigit, logPomodoro } = this.props;

    let topOfCount = getTotalTime(nextProps.currentTime) === getTotalTime(startTime);
    
    if (nextProps.countingDown && topOfCount ) {
      this.setState({
        interval : setInterval(replaceDigit, 1000)
      });
    }

    if (getTotalTime(currentTime) === 1) {
      playADing();
      countFinished();
      if (currentOption === 'pomodoro') { logPomodoro(); }
      clearInterval(this.state.interval);
    }
  }

  render() {
    
    const { klass, currentTime } = this.props;
    
    return (
      <div style={ timerStyle } className={ klass }>
        <Digit value={ currentTime[0] } />
        <Digit value={ currentTime[1] } />
        <Colon />
        <Digit value={ currentTime[2] } />
        <Digit value={ currentTime[3] } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentTime : state.setTime.currentTime,
    countingDown : state.setTime.countingDown,
    currentOption : state.setTime.currentOption,
    startTime : convertTimeString(state.setTime.timerOptions[state.setTime.currentOption].startTime)
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

Timer = Radium(Timer);

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
