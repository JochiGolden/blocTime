function currentTask (state = [], action) {
  
  let newState = {};
  
  switch (action.type) {
      
    case "LOG_POMODORO" :
      
      newState.pomodoro = state.pomodoro + 1;
      
      return {...state, ...newState};

    default:
      return state;
  }
}

export default currentTask;