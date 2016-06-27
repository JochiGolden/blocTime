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

export function replaceDigit(index) {
  return {
    type: 'REPLACE_DIGIT',
    index: index // Index of digit in store.setTime.currentTime
  }
}

export function zeroed(index) {
  return {
    type: 'ZEROED',
    index: index
  }
}

export function countFinished(index) {
  return {
    type: 'COUNT_FINISHED',
    index: index // 
  }
}
