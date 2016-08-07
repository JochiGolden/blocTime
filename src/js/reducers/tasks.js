function tasks (state = [], action) {
  
  let newState = {};
  newState.list = state.list;
  
  switch (action.type) {
      
    case 'CHANGE_CURRENT_TASK' :

      newState.currentTask = action.id;
      
      return {...state, ...newState};
    
    case "OPEN_FORM" :

      newState.addingTask = true;
      
      return {...state, ...newState};
      
    case "ADD_NEW_TASK" :

      newState.taskHistory = state.taskHistory + 1;
      
      if (Object.keys(newState.list).length === 0) {
        newState.currentTask = 'id' + newState.taskHistory
      }
      
      let d = new Date();

      newState.list['id' + newState.taskHistory] = {
        subtasks: action.text,
        pomodoros: 0
      };
      
      newState.list['id' + newState.taskHistory].title =
        !action.title ? '<Blank>' : action.title;
      
      newState.addingTask = false;
      
      return {...state, ...newState};
    
    case "LOG_POMODORO" :

      let current = state.currentTask;
      
      newState.list[current].pomodoros = state.list[current].pomodoros + 1;
      
      return {...state, ...newState};
    
    case "DELETE_HIGHLIGHTED_TASK" :
      
      if (Object.keys(newState.list).length > 0) {
        delete newState.list[action.id];
        newState.currentTask = Object.keys(newState.list)[0];
      } else if (Object.keys(newState.list).length === 0) {
        newState.currentTask = null;
      }
      
      return {...state, ...newState};
      
    default:
      return state;
  }
}

export default tasks;