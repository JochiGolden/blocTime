// Add task

// log a completed pomodoro

// reset timer

export function setTimer(duration) {
  return {
    type: 'SET_TIMER',
    duration: duration
  };
}

export function countDown(currentTime) {
  return {
    type: 'COUNT_DOWN',
    currentTime: currentTime
  }
}