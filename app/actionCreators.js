/*****************************************/
/* SET_TIME                              */
/*****************************************/

export function setInitialTime() {
  return {
    type: 'SET_INITIAL_TIME'
  };
}

export function setCurrentOption(option) {
  return {
    type: 'SET_CURRENT_OPTION',
    option
  };
}

export function startCount() {
  return {
    type: 'START_COUNT'
  }
}

export function replaceDigit() {
  return {
    type: 'REPLACE_DIGIT'
  }
}

export function countFinished() {
  return {
    type: 'COUNT_FINISHED'
  }
}

export function playADing() {
  return {
    type: 'PLAY_A_DING'
  }
}

/*****************************************/
/* TASKS                                 */
/*****************************************/

export function changeCurrentTask( id ) {
  return {
    type: 'CHANGE_CURRENT_TASK',
    id
  }
}

export function openForm() {
  return {
    type: 'OPEN_FORM'
  }
}

export function addNewTask( title, text ) {
  return {
    type: 'ADD_NEW_TASK',
    title,
    text
  }
}

export function logPomodoro() {
  return {
    type: 'LOG_POMODORO'
  };
}

export function deleteHighlightedTask(id) {
  return {
    type: 'DELETE_HIGHLIGHTED_TASK',
    id
  };
}
