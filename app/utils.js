// GET_TOTAL_TIME
export function getTotalTime (currentTime) {
  let minTens = currentTime[0] * 600,
      minOnes = currentTime[1] * 60,
      secTens = currentTime[2] * 10;
  return minTens + minOnes + secTens + currentTime[3];  
}

// GET_TIME_AS_ARRAY
export function getTimeAsArray (totalTime) {
  return [
    Math.floor(totalTime / 600),
    Math.floor(totalTime / 60) % 10,
    Math.floor((totalTime % 60) / 10),
    totalTime % 10
  ];
}

// CONVERT_TIME_STRING
export function convertTimeString (timeString) {
  return timeString.split('').map((digit) => parseInt(digit));
}
