function setTime(state = [], action) {
  
  let newState = {};
  
  switch (action.type) {
    case 'SET_TIMER' :
      
      for (var duration in state.startTime) {
        if (duration === action.duration) {
          newState.totalTime = state.startTime[action.duration];
          newState.currentTime = state.startTime[action.duration];
          return {...state, ...newState};
        }
      }
    case 'COUNT_DOWN' :
      
      newState.currentTime = state.currentTime - 1;

      return {...state, ...newState};
    default:
      return state;
  }
}

export default setTime;