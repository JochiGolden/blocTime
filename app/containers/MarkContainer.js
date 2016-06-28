import React from 'react';
import CompletionMark from '../components/CompletionMark';
import { markContainer, markContainerText, marks } from '../styles';

const MarkContainer = ({ pomodorosCompleted }) => {
  
  return (
    <div style={ markContainer }>

      <div className="row" style={ markContainerText }>
        Completed Pomodoros
      </div>
      <div className="row" style={ marks }>
        {[...Array(pomodorosCompleted)].map((component, index) =>
          <CompletionMark key={index + 1} />
         )}
      </div>

    </div>
  );
}

export default MarkContainer;