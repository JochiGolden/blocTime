function setTime(state = [], action) {
  
  let newState = {};
  newState.currentTime = state.currentTime;
  
  switch (action.type) {
    case 'SET_INITIAL_TIME' :
      
      console.log('Reducer Set Initial Time');

      newState.currentTime = state.timerOptions[state.currentOption].startTime;
      newState.countingDown = [false, false, false, false];
      
      return {...state, ...newState};
      
    case 'START_COUNT' :
      
      console.log('Reducer Start Count');
      newState.countingDown = [true, true, true, true];
      newState.currentTime = state.timerOptions[state.currentOption].startTime;
      newState.currentTime = [
        newState.currentTime[0] < 1 ? newState.currentTime[0] : newState.currentTime[0] - 1,
        newState.currentTime[1] - 1,
        newState.currentTime[2] - 5,
        newState.currentTime[3] - 1];

      return {...state, ...newState};
      
    case 'REPLACE_DIGIT' :
      
      console.log('Reducer Replace Digit');
      newState.currentTime[action.index] -= 1;
      
      return {...state, ...newState};
    
    case 'ZEROED' :
      
      newState.countingDown = state.countingDown;
      let index = action.index ? action.index : 0;
      
      if (newState.currentTime[index - 1] === 0 || undefined) {
        newState.countingDown[index] = false;
      } else if (index % 2 === 0) {
        newState.currentTime[index] = 5;
      } else {
        newState.currentTime[index] = 10;
      }
      console.log(`Reducer Zero says newState.countingDown equals ${newState.countingDown}`);
      
      return {...state, ...newState};
      
    case 'COUNT_FINISHED' :
      
      console.log(`Reducer Count Finished at index ${index}`);
      
      let stillCounting = newState.countingDown.reduce((prevDigit, currDigit) => {
        return prevDigit || currDigit ? true : false;
      });
      
      if (!stillCounting) {
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
      }
      
      console.log(`the newState.currentOption is ${newState.currentOption.label}`);
      
      return {...state, ...newState};
      
    default:
      return state;
  }
}

export default setTime;