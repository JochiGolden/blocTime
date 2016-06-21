import React from "react";
import Timer from './Timer';
import SetInterval from '../containers/SetInterval';
import ButtonContainer from '../containers/ButtonContainer';
import TimerContainer from '../containers/TimerContainer';
import MarkContainer from '../containers/MarkContainer';

const Main = React.createClass({
  
  render: function() {
    
    const {setTime, setInitialTime, countDown, countFinished} = this.props;
    
    // only show the relavent buttons
    // initially show the pomodoro button
    // once the pomodoro starts, swap the button text to reset
    
    // Pomodoro button paired with reset button
    // reset button shouldn't display if break is counting
    
    // if the state.currentTime variable hits 0:
    //    display an x for each completed pomodoro
    //    display the short break button if x's are < 4
    //    else if x's === 4, show the long break button
    
    return (
      <div className="jumbotron text-center">
        
        <div className="row">
          <div className="container" id="timerContainer">
            <TimerContainer
              currentTime={setTime.currentTime}
              countingDown={setTime.countingDown}
              countDown={countDown}
              countFinished={countFinished}/>

            <MarkContainer pomodorosCompleted={setTime.pomodorosCompleted}/>
          </div>

          <div className="row">
            <ButtonContainer
              currentOption={setTime.currentOption}
              setInitialTime={setInitialTime} />
          </div>
        </div>
      </div>
    );
  }
});

export default Main;