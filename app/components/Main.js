import React from "react";
import Timer from './Timer';
import SelectBtn from './buttons/SelectBtn';
import MarkContainer from '../containers/MarkContainer';
import Ding from './Ding';

const Main = ({ setTime, setInitialTime, startCount, replaceDigit, countFinished, playADing }) => {
  
  return (
    <div className="jumbotron text-center">
     
      <div className="row">
        <div className="container" id="timerContainer">
          <Timer 
            countingDown={ setTime.countingDown }
            currentTime={ setTime.currentTime }
            replaceDigit={ replaceDigit }
            countFinished={ countFinished }
            playADing={ playADing }
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