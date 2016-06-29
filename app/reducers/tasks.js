function tasks (state = [], action) {
  
  let newState = {};
  
  switch (action.type) {
    
    case "SOMETHING!" :
      
      return {...state, ...newState};
      
    default:
      return state;
  }
}

export default tasks;