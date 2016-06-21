function setTime(state = [], action) {
  
  let newState = {};
  
  switch (action.type) {
    case 'SET_INITIAL_TIME' :
      
      newState.currentOption = action.duration;
      newState.countingDown = true;
      
      switch (action.duration) {
        case 'pomodoro' :
          newState.currentTime = 5;
          break;
        case 'shortBreak' :
          newState.currentTime = 5;
          break;
        case 'longBreak' :
          newState.currentTime = 5;
          break;
      }
      return {...state, ...newState};
    case 'COUNT_DOWN' :
      
      newState.currentTime = state.currentTime - 1;

      return {...state, ...newState};
      
    case 'COUNT_FINISHED' :
      newState.countingDown = false;
      
      if (state.currentOption === 'pomodoro') {
        newState.pomodorosCompleted = state.pomodorosCompleted + 1;
      }
      
      if (state.pomodorosCompleted % 4 === 3 && !state.onBreak) {
        newState.currentOption = state.timerOptions.longBreak;
        newState.onBreak = true;
      } else if (!state.onBreak) {
        newState.currentOption = state.timerOptions.shortBreak;
        newState.onBreak = true;
      } else {
        newState.currentOption = state.timerOptions.pomodoro;
        newState.onBreak = false;
      }
      return {...state, ...newState};
    default:
      return state;
  }
}

export default setTime;