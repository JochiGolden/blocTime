import React from "react";
import Timer from './Timer';
import SelectBtn from './buttons/SelectBtn';
import MarkContainer from '../containers/MarkContainer';

const Main = ({ setTime, setInitialTime, startCount, replaceDigit, countFinished }) => {
  
  return (
    <div className="jumbotron text-center">

      <div className="row">
        <div className="container" id="timerContainer">
          <Timer 
            countingDown={ setTime.countingDown }
            currentTime={ setTime.currentTime }
            replaceDigit={ replaceDigit }
            countFinished={ countFinished }
            />
          <MarkContainer
              pomodorosCompleted={ setTime.pomodorosCompleted } />
        </div>
        <div className="row">
          <SelectBtn
            countingDown={ setTime.countingDown }
            setInitialTime={ setInitialTime }
            label={ setTime.timerOptions[setTime.currentOption].label }
            startCount={ startCount } />
        </div>
      </div>
    </div>
  );
}

export default Main;