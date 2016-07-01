function tasks (state = [], action) {
  
  let newState = {};
  newState.list = state.list;
  
  switch (action.type) {
      
    case 'CHANGE_CURRENT_TASK' :
      console.log('changed');
      newState.currentTask = action.index;
      
      return {...state, ...newState};
    
    case "OPEN_FORM" :

      newState.addingTask = true;
      
      return {...state, ...newState};
      
    case "ADD_NEW_TASK" :

      newState.list.push({
        id: state.list.length,
        title: action.title,
        subtasks: action.text,
        pomodoros: 0
      });
      
      newState.addingTask = false;
      
      return {...state, ...newState};
    
    case "LOG_POMODORO" :

      let index = state.currentTask;
      
      newState.list[index].pomodoros = state.list[index].pomodoros + 1;
      
      return {...state, ...newState};
      
    default:
      return state;
  }
}

export default tasks;