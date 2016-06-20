import React from "react";
import Timer from './Timer';
import SetInterval from '../containers/SetInterval';

const Main = React.createClass({
  
  render: function() {
    
    const {setTime, setTimer, countDown} = this.props;
    
    let TimerContainer = SetInterval(Timer, { currentTime: setTime.currentTime }, countDown);
    
    return (
      <div className="main-container jumbotron col-sm-12 text-center">

        <TimerContainer />
        
        <button type="button"
                className="btn btn-lg"
                onClick={setTimer.bind(null, 'pomodoro')}>
          Pomodoro
        </button>
        
        <button type="button"
                className="btn btn-lg"
                onClick={setTimer.bind(null, 'shortBreak')}>
          Short Break
        </button>
        
        <button type="button"
                className="btn btn-lg"
                onClick={setTimer.bind(null, 'longBreak')}>
          Long Break
        </button>
  
      </div>
    );
  }
});

export default Main;