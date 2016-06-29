import React from 'react';
import Digit from '../components/Digit';
import { digitStyle, timerStyle } from '../styles';

const SetInterval = (
  { klass, currentTime, countingDown, currentOption, playADing,
    countFinished, replaceDigit, logPomodoro
  }) => class extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.intervals = [];
  }

  componentWillUnmount() {
    this.intervals.forEach(clearInterval);
  }

  componentDidMount() {
    console.log('setintervaldidmount');
    let minTens = currentTime[0] * 600,
        minOnes = currentTime[1] * 60,
        secTens = currentTime[2] * 10,
        totalTime = minTens + minOnes + secTens + currentTime[3];
    if (countingDown) {
      if (totalTime > 0) {
        this.setInterval(this.update.bind(this), 1000);
      } else {
        playADing();
        countFinished();
        if (currentOption === 'pomodoro') { logPomodoro(); }
      }
    }
  }

  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  }

  update() {
    this.setState(replaceDigit);
  }

  render() {
    return (
      <div style={ timerStyle } className={ klass }>
        <Digit value={ currentTime[0] } />
        <Digit value={ currentTime[1] } />
        <div style={ digitStyle }>:</div>
        <Digit value={ currentTime[2] } />
        <Digit value={ currentTime[3] } />
      </div>
    );
  }
};

export default SetInterval;
