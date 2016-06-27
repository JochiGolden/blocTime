import React from "react";
import Timer from './Timer';
import ButtonContainer from '../containers/ButtonContainer';
import MarkContainer from '../containers/MarkContainer';

class Main extends React.Component {
  
  render() {
    
    const { setTime, setInitialTime, startCount, replaceDigit, countFinished } = this.props;

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
          <ButtonContainer
              currentOption={ setTime.currentOption }
              timerOptions={ setTime.timerOptions }
              countingDown={ setTime.countingDown }
              setInitialTime={ setInitialTime }
              startCount={ startCount } />
        </div>
      </div>
    );
  }
}

export default Main;