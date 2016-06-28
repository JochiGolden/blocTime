import React from 'react';
import Digit from '../components/Digit';
import { digit, timer } from '../styles';


const SetInterval = ( Component, { currentTime, countingDown, playADing, countFinished, replaceDigit }) =>  class extends React.Component {
  
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
      <div style={ timer }>
          <Component value={ currentTime[0] } />
          <Component value={ currentTime[1] } />
          <div style={ digit }>:</div>
          <Component value={ currentTime[2] } />
          <Component value={ currentTime[3] } />
      </div>
    );
  }
};

export default SetInterval;
