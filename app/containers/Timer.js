import React from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { countFinished, replaceDigit, playADing, logPomodoro } from '../actionCreators';
import { timerStyle, digitStyle } from '../styles';
import { getTotalTime, getTimeAsArray, convertTimeString } from '../utils';

import Digit from '../components/Digit';
import SelectBtn from '../components/SelectBtn';

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
      <div className="row" style={[{ position: 'relative', width: '100%' }]}>
       <div className="col-md-12">
        <div style={ timerStyle }>

          <Digit value={ timeArray[0] } />
          <Digit value={ timeArray[1] } />
          <div className="col-md-1" />
          <Digit value={ timeArray[2] } />
          <Digit value={ timeArray[3] } />

        </div>

          <SelectBtn />

        </div>
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
