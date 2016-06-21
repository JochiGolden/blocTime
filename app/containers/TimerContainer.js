import React from 'react';
import SetInterval from './SetInterval';
import Timer from '../components/Timer';

// Requires:
//    setTime.currentTime
//    setTime.countingDown
//    countDown(fn)
//    countFinished(fn)

class TimerContainer extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    let IntervalTimer = SetInterval(
      Timer,
      { currentTime: this.props.currentTime },
      this.props.countDown
    );
    
    if (this.props.countingDown) {
      return (
        <IntervalTimer countFinished={this.props.countFinished} />
      );
    } else {
      return (
        <Timer currentTime={ this.props.currentTime } />
      );
    }
  }
}

export default TimerContainer;