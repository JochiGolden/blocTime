// Add task

export function setInitialTime(duration) {
  return {
    type: 'SET_INITIAL_TIME',
    duration: duration
  };
}

export function countDown(currentTime) {
  return {
    type: 'COUNT_DOWN',
    currentTime: currentTime
  }
}

export function countFinished(currentTime) {
  return {
    type: 'COUNT_FINISHED',
    currentTime: currentTime
  }
}
