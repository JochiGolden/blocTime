import React from 'react';
import Radium from 'radium';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { markContainerStyle, currentMarkStyle } from '../styles';

import CompletionMark from '../components/CompletionMark';

const MarkContainer = ({ currentMarks, pomodoros }) => {

  return (
    <div style={[ markContainerStyle, currentMarks ? currentMarkStyle : null ]}>
      <ReactCSSTransitionGroup transitionName="logPomodoro" transitionEnterTimeout={500} transitionLeaveTimeout={300}>

      {[...Array(pomodoros)].map((component, index) =>
        <CompletionMark key={ `mark-${index + 1}`} />
       )}

      </ReactCSSTransitionGroup>
    </div>
  );  
}

export default Radium(MarkContainer);
