import React from 'react';
import SetInterval from '../containers/SetInterval';
import Digit from './Digit';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Timer = ({ currentTime, countingDown, countFinished, replaceDigit }) => {
  
  let Counter = SetInterval({ replaceDigit, currentTime, countFinished });
  
  let Display = countingDown ?
      <Counter />
      : 
      <div id="timer">
        <Digit index={0} />
        <Digit index={1} />
        <div className="colon">:</div>
        <Digit index={2} />
        <Digit index={3} />
      </div>

  return (
    <ReactCSSTransitionGroup transitionName="digit" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
      { Display }
    </ReactCSSTransitionGroup>
  );
}

export default Timer;
