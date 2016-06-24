// Add task

export function setInitialTime(startTime) {
  return {
    type: 'SET_INITIAL_TIME',
    startTime: startTime, // Array of four numbers
  };
}

export function countDown(totalTime) {
  return {
    type: 'COUNT_DOWN',
    totalTime: totalTime // Number, total seconds remaining on timer
  }
}

export function countFinished(currentTime) {
  return {
    type: 'COUNT_FINISHED',
    currentTime: currentTime // 
  }
}
