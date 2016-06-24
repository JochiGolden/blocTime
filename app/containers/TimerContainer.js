import React from 'react';
import StaticTimer from '../components/StaticTimer';
import ActiveTimer from '../components/ActiveTimer';

// Requires:
//    countDown(fn)
//    countFinished(fn)

class TimerContainer extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    const { countDown, setInitialTime, countFinished, countingDown, currentTime } = this.props;
    
    if (this.props.countingDown) {
      return (
        <ActiveTimer
          currentTime={ currentTime }
          countDown={ countDown }
          setInitialTime={ setInitialTime }
          countFinished={ countFinished } />
      );
    } else {
      return (
        <StaticTimer
          currentTime={ currentTime } />
      );
    }
  }
}

export default TimerContainer;