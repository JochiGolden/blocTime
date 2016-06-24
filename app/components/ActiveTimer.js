import React from 'react';
import Digit from './Digit';
import SetInterval from '../containers/SetInterval';
import VelocityContainer from 'velocity-react';

// Required Props:
//    currentTime,
//    countDown,
//    countFinished

class ActiveTimer extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  getTotalTime() {
    const P = this.props;
    
    P.currentTime.forEach((digit, index) => {
      P.currentTime[index] = P.currentTime[index] === 10 ? 0 : P.currentTime[index];
    });
    
    return P.currentTime[0] * 600
      + P.currentTime[1] * 60
      + P.currentTime[2] * 10
      + P.currentTime[3];
  }
  
  render() {
    
    let { currentTime, countDown, countFinished } = this.props;
    
    let DigitWrapper = SetInterval(
      Digit,
      {totalTime: this.getTotalTime()},
      countDown);
    
    return (
      <div id="timer">
        <VelocityTransitionGroup>
          <Digit value={[currentTime[0]]} />
          <Digit value={[currentTime[1]]} />
          <div className="digit">:</div>
          <Digit value={[currentTime[2]]} />
          <DigitWrapper value={[currentTime[3]]} countFinished={countFinished}/>
      </div>
    );
  }
}

export default ActiveTimer;
