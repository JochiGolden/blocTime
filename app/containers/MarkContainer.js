import React from 'react';
import CompletionMark from '../components/CompletionMark';

// Requires: setTime.pomodorosCompleted

const MarkContainer = ({pomodorosCompleted}) => {
  
  return (
    <div id="markContainer">
      <div className="row" id="markContainerText">
        Completed Pomodoros
      </div>
      <div className="row" id="marks">
        {[...Array(pomodorosCompleted)].map((component, index) =>
          <CompletionMark key={index + 1} />
         )}
      </div>
    </div>
  );
}

export default MarkContainer;