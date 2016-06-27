// Add task

export function setInitialTime(currentOption) {
  return {
    type: 'SET_INITIAL_TIME',
    currentOption: currentOption, // Array of four numbers
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
