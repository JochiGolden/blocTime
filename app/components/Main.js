import React from "react";
import TimerContainer from '../containers/TimerContainer';
import ButtonContainer from '../containers/ButtonContainer';
import MarkContainer from '../containers/MarkContainer';

class Main extends React.Component {
  
  render() {
    
    const { setTime, setInitialTime, countDown, countFinished } = this.props;

    return (
      <div className="jumbotron text-center">
        
        <div className="row">
          <div className="container" id="timerContainer">
            <TimerContainer
              currentTime={ setTime.currentTime }
              countingDown={ setTime.countingDown }
              countDown={ countDown }
              countFinished={ countFinished }
              setInitialTime={ setInitialTime } />

            <MarkContainer pomodorosCompleted={ setTime.pomodorosCompleted } />
          </div>

          <div className="row">
            <ButtonContainer
              currentOption={ setTime.currentOption }
              setInitialTime={ setInitialTime } />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;