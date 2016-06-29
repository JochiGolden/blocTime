import React from 'react';
import { connect } from 'react-redux';
import { markContainerStyle } from '../styles';

import CompletionMark from '../components/CompletionMark';

const MarkContainer = ({ pomodoros, klass }) => {
  
  return (
      <div style={ markContainerStyle } className={ klass }>
        {[...Array(pomodoros)].map((component, index) =>
          <CompletionMark key={index + 1} />
         )}
      </div>
  );
}

export default MarkContainer;
