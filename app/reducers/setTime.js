function setTime(state = [], action) {
  
  let newState = {};
  newState.currentTime = state.currentTime;
  
  switch (action.type) {
    case 'SET_INITIAL_TIME' :
      
      // action.startTime
      
      newState.countingDown = true;
      
      newState.currentTime = action.startTime;
      
      return {...state, ...newState};
    case 'COUNT_DOWN' :
      
      // action.index, action.totalTime
      
      let totalTime = action.totalTime.totalTime - 1,
          minutes = Math.floor(totalTime / 60),
          seconds = totalTime % 60,
          minutesTens = Math.floor(minutes / 10),
          minutesOnes = minutes % 10,
          secondsTens = Math.floor(seconds / 10),
          secondsOnes = seconds % 10;
      
      newState.currentTime = [minutesTens, minutesOnes, secondsTens, secondsOnes];
      
      return {...state, ...newState};
      
    case 'COUNT_FINISHED' :
      
      newState.countingDown = false;
      
      if (state.currentOption === 'pomodoro') {
        newState.pomodorosCompleted = state.pomodorosCompleted + 1;
        newState.onBreak = true;
      }
      
      if (state.pomodorosCompleted % 4 === 3 && newState.onBreak) {
        newState.currentOption = state.timerOptions.longBreak;
      } else if (newState.onBreak) {
        newState.currentOption = state.timerOptions.shortBreak;
      } else {
        newState.currentOption = state.timerOptions.pomodoro;
      }
      
      return {...state, ...newState};
      
    default:
      return state;
  }
}

export default setTime;