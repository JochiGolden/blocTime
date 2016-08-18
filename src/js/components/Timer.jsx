import React from 'react';
import { connect } from 'react-redux';
import { countFinished, replaceDigit, playADing, logPomodoro } from '../actions';
import { getTotalTime, getTimeAsArray, convertTimeString } from '../utils';

import SelectBtn from '../sub_components/SelectBtn.jsx';

class Timer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentWillReceiveProps(nextProps) {

    let { currentTime, currentOption, startTime, playADing, countFinished, replaceDigit, logPomodoro } = this.props;
    
    let nextTime = typeof nextProps.currentTime === 'object'
      ? getTotalTime(nextProps.currentTime)
      : nextProps.currentTime;
    
    let topOfCount = nextTime === getTotalTime(startTime);

    if (nextProps.countingDown && topOfCount) {
      if (!this.state.interval) {
        this.setState({
          interval : setInterval(replaceDigit, 1000)
        });
      }
    }

    if (currentTime === 1) {
      playADing();
      countFinished();
      if (currentOption === 'pomodoro') { logPomodoro(); }
      clearInterval(this.state.interval);
      delete this.state.interval;
    }
  }

  render() {
    
    const { klass, currentTime } = this.props;

    let timeArray = typeof currentTime === 'string'
      ? convertTimeString(currentTime)
      : getTimeAsArray(currentTime);
    
    return (
      <div className="row row-center">

        <div className="timer row row-space">
          <div className="timer-digit">{ timeArray[0] }</div>
          <div className="timer-digit">{ timeArray[1] }</div>
          <div className="timer-colon col-md-1 ">:</div>
          <div className="timer-digit">{ timeArray[2] }</div>
          <div className="timer-digit">{ timeArray[3] }</div>
        </div>

        <SelectBtn />

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

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
