import { getTotalTime, getTimeAsArray, convertTimeString } from '../utils.js';

function setTime (state = [], action) {
  
  let newState = {};
  newState.currentTime = state.currentTime;
  
  switch (action.type) {
    case 'SET_INITIAL_TIME' :

      newState.currentTime = convertTimeString(state.timerOptions[state.currentOption].startTime);
      newState.currentTime = getTotalTime(newState.currentTime);
      newState.countingDown = false;

      return {...state, ...newState};
      
    case 'SET_CURRENT_OPTION' :

      newState.currentOption = action.option;

      return {...state, ...newState};

    case 'START_COUNT' :

      newState.countingDown = true;

      return {...state, ...newState};
      
    case 'REPLACE_DIGIT' :
      
      newState.currentTime -= 1;
      
      return {...state, ...newState};
      
    case 'COUNT_FINISHED' :
      
      newState.countingDown = false;
      
      if (state.currentOption === 'pomodoro') {
        newState.consecutiveBreaks = state.consecutiveBreaks + 1;
        newState.onBreak = true;
      }

      if (state.consecutiveBreaks % 4 === 3 && newState.onBreak) {
        newState.currentOption = 'longBreak';
      } else if (newState.onBreak) {
        newState.currentOption = 'shortBreak';
      } else {
        newState.currentOption = 'pomodoro';
      }
      
      return {...state, ...newState};
      
    case 'PLAY_A_DING' :
      
      const audioNode = document.getElementById('ding');
      audioNode.volume = 0.1;
      audioNode.play();
      
      return state;
      
    default:
      return state;
  }
}

export default setTime;