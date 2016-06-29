function setTime (state = [], action) {
  
  let newState = {};
  newState.currentTime = state.currentTime;
  
  switch (action.type) {
    case 'SET_INITIAL_TIME' :

      newState.currentTime = state.timerOptions[state.currentOption].startTime
        .split('').map((digit) => parseInt(digit));
      newState.countingDown = false;

      return {...state, ...newState};

    case 'START_COUNT' :

      newState.currentTime = state.timerOptions[state.currentOption].startTime
        .split('').map((digit) => parseInt(digit));
      newState.countingDown = true;

      return {...state, ...newState};
      
    case 'REPLACE_DIGIT' :
      
      let minTens = newState.currentTime[0] * 600,
          minOnes = newState.currentTime[1] * 60,
          secTens = newState.currentTime[2] * 10,
          totalTime = minTens + minOnes + secTens + newState.currentTime[3];
      
      totalTime -= 1;

      newState.currentTime[3] = totalTime % 10;
      newState.currentTime[2] = Math.floor((totalTime % 60) / 10);
      newState.currentTime[1] = Math.floor(totalTime / 60);
      newState.currentTime[0] = Math.floor(totalTime / 600);
      console.log('totalTime', totalTime, 'newState.currentTime', newState.currentTime, 'state.currentTime', state.currentTime);
      
      return {...state, ...newState};
      
    case 'COUNT_FINISHED' :
      
      newState.countingDown = false;
      
      if (state.currentOption === 'pomodoro') {
        newState.currentTask.pomodoros = state.currentTask.pomodoros + 1;
        newState.onBreak = true;
      }

      if (state.currentTask.pomodoros % 4 === 3 && newState.onBreak) {
        newState.currentOption = 'longBreak';
      } else if (newState.onBreak) {
        newState.currentOption = 'shortBreak';
      } else {
        newState.currentOption = 'pomodoro';
      }
      
      return {...state, ...newState};
      
    case 'PLAY_A_DING' :
      
      const audioNode = document.getElementById('ding');
      console.log('A ding is played');
      audioNode.volume = 0.1;
      audioNode.play();
      
      return state;
      
    default:
      return state;
  }
}

export default setTime;