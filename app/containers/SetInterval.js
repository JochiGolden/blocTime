import React from 'react';
import Digit from '../components/Digit';

const SetInterval = ({ countFinished, currentTime, replaceDigit, currentOption, playADing }) => class extends React.Component {
  
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
    
    let minTens = currentTime[0] * 600,
        minOnes = currentTime[1] * 60,
        secTens = currentTime[2] * 10,
        totalTime = minTens + minOnes + secTens + currentTime[3];
    
    if (totalTime > 0) {
      this.setInterval(this.update.bind(this), 1000);
    } else {
      playADing();
      countFinished();
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
      <div id="timer">
          <Digit index={0} />
          <Digit index={1} />
          <div className="colon">:</div>
          <Digit index={2} />
          <Digit index={3} />
      </div>
    );
  }
}

export default SetInterval;
